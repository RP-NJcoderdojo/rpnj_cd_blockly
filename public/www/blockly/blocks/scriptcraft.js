/*
Blockly.Blocks['functions_mc_func'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField("MC function");
    this.appendStatementInput("NAME");
    this.setOutput(true);
    this.setTooltip('');
  }
};
*/


Blockly.Blocks['mc_func_return'] = {
  /**
   * Block for defining a procedure with a return value.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.PROCEDURES_DEFRETURN_HELPURL);
    this.setColour(290);
    var name = Blockly.Procedures.findLegalName(
        Blockly.Msg.PROCEDURES_DEFRETURN_PROCEDURE, this);
	var name = "MC Function with return"
    this.appendDummyInput()
        .appendField(Blockly.Msg.PROCEDURES_DEFRETURN_TITLE)
        .appendField(new Blockly.FieldTextInput(name,
        Blockly.Procedures.rename), 'NAME')
        .appendField('', 'PARAMS');
    this.appendValueInput('RETURN')
        .setAlign(Blockly.ALIGN_RIGHT)
        //.appendField(Blockly.Msg.PROCEDURES_DEFRETURN_RETURN);
		.appendField("MC_Func_name");
    this.setMutator(new Blockly.Mutator(['procedures_mutatorarg']));
    this.setTooltip(Blockly.Msg.PROCEDURES_DEFRETURN_TOOLTIP);
    this.arguments_ = [];
    this.setStatements_(true);
    this.statementConnection_ = null;
  },
  setStatements_: Blockly.Blocks['procedures_defnoreturn'].setStatements_,
  updateParams_: Blockly.Blocks['procedures_defnoreturn'].updateParams_,
  mutationToDom: Blockly.Blocks['procedures_defnoreturn'].mutationToDom,
  domToMutation: Blockly.Blocks['procedures_defnoreturn'].domToMutation,
  decompose: Blockly.Blocks['procedures_defnoreturn'].decompose,
  compose: Blockly.Blocks['procedures_defnoreturn'].compose,
  dispose: Blockly.Blocks['procedures_defnoreturn'].dispose,
  /**
   * Return the signature of this procedure definition.
   * @return {!Array} Tuple containing three elements:
   *     - the name of the defined procedure,
   *     - a list of all its arguments,
   *     - that it DOES have a return value.
   * @this Blockly.Block
   */
  getProcedureDef: function() {
    return [this.getFieldValue('NAME'), this.arguments_, true];
  },
  getVars: Blockly.Blocks['procedures_defnoreturn'].getVars,
  renameVar: Blockly.Blocks['procedures_defnoreturn'].renameVar,
  customContextMenu: Blockly.Blocks['procedures_defnoreturn'].customContextMenu,
  callType_: 'procedures_callreturn'
};



Blockly.Blocks['functions_mc_func'] = {
  /**
   * Block for defining a procedure with no return value.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.PROCEDURES_DEFNORETURN_HELPURL);
    this.setColour(120);
    //var name = Blockly.Procedures.findLegalName(
    //    Blockly.Msg.PROCEDURES_DEFNORETURN_PROCEDURE, this);
	var name = 'function_name';
    this.appendDummyInput()
        //.appendField(Blockly.Msg.PROCEDURES_DEFNORETURN_TITLE)
		.appendField('MC Function')
        .appendField(new Blockly.FieldTextInput(name,
        Blockly.Procedures.rename), 'NAME')
        .appendField('', 'PARAMS');
    this.setMutator(new Blockly.Mutator(['procedures_mutatorarg']));
    this.setTooltip(Blockly.Msg.PROCEDURES_DEFNORETURN_TOOLTIP);
    this.arguments_ = [];
    this.setStatements_(true);
    this.statementConnection_ = null;
  },
  /**
   * Add or remove the statement block from this function definition.
   * @param {boolean} hasStatements True if a statement block is needed.
   * @this Blockly.Block
   */
  setStatements_: function(hasStatements) {
    if (this.hasStatements_ === hasStatements) {
      return;
    }
    if (hasStatements) {
      this.appendStatementInput('STACK')
          .appendField(Blockly.Msg.PROCEDURES_DEFNORETURN_DO);
      if (this.getInput('RETURN')) {
        this.moveInputBefore('STACK', 'RETURN');
      }
    } else {
      this.removeInput('STACK', true);
    }
    this.hasStatements_ = hasStatements;
  },
  /**
   * Update the display of parameters for this procedure definition block.
   * Display a warning if there are duplicately named parameters.
   * @private
   * @this Blockly.Block
   */
  updateParams_: function() {
    // Check for duplicated arguments.
    var badArg = false;
    var hash = {};
    for (var i = 0; i < this.arguments_.length; i++) {
      if (hash['arg_' + this.arguments_[i].toLowerCase()]) {
        badArg = true;
        break;
      }
      hash['arg_' + this.arguments_[i].toLowerCase()] = true;
    }
    if (badArg) {
      this.setWarningText(Blockly.Msg.PROCEDURES_DEF_DUPLICATE_WARNING);
    } else {
      this.setWarningText(null);
    }
    // Merge the arguments into a human-readable list.
    var paramString = '';
    if (this.arguments_.length) {
      paramString = Blockly.Msg.PROCEDURES_BEFORE_PARAMS +
          ' ' + this.arguments_.join(', ');
    }
    this.setFieldValue(paramString, 'PARAMS');
  },
  /**
   * Create XML to represent the argument inputs.
   * @return {Element} XML storage element.
   * @this Blockly.Block
   */
  mutationToDom: function() {
    var container = document.createElement('mutation');
    for (var i = 0; i < this.arguments_.length; i++) {
      var parameter = document.createElement('arg');
      parameter.setAttribute('name', this.arguments_[i]);
      container.appendChild(parameter);
    }

    // Save whether the statement input is visible.
    if (!this.hasStatements_) {
      container.setAttribute('statements', 'false');
    }
    return container;
  },
  /**
   * Parse XML to restore the argument inputs.
   * @param {!Element} xmlElement XML storage element.
   * @this Blockly.Block
   */
  domToMutation: function(xmlElement) {
    this.arguments_ = [];
    for (var i = 0, childNode; childNode = xmlElement.childNodes[i]; i++) {
      if (childNode.nodeName.toLowerCase() == 'arg') {
        this.arguments_.push(childNode.getAttribute('name'));
      }
    }
    this.updateParams_();

    // Show or hide the statement input.
    this.setStatements_(xmlElement.getAttribute('statements') !== 'false');
  },
  /**
   * Populate the mutator's dialog with this block's components.
   * @param {!Blockly.Workspace} workspace Mutator's workspace.
   * @return {!Blockly.Block} Root block in mutator.
   * @this Blockly.Block
   */
  decompose: function(workspace) {
    var containerBlock = Blockly.Block.obtain(workspace,
                                              'procedures_mutatorcontainer');
    containerBlock.initSvg();

    // Check/uncheck the allow statement box.
    if (this.getInput('RETURN')) {
      containerBlock.setFieldValue(this.hasStatements_ ? 'TRUE' : 'FALSE',
                                   'STATEMENTS');
    } else {
      containerBlock.getInput('STATEMENT_INPUT').setVisible(false);
    }

    // Parameter list.
    var connection = containerBlock.getInput('STACK').connection;
    for (var i = 0; i < this.arguments_.length; i++) {
      var paramBlock = Blockly.Block.obtain(workspace, 'procedures_mutatorarg');
      paramBlock.initSvg();
      paramBlock.setFieldValue(this.arguments_[i], 'NAME');
      // Store the old location.
      paramBlock.oldLocation = i;
      connection.connect(paramBlock.previousConnection);
      connection = paramBlock.nextConnection;
    }
    // Initialize procedure's callers with blank IDs.
    Blockly.Procedures.mutateCallers(this.getFieldValue('NAME'),
                                     this.workspace, this.arguments_, null);
    return containerBlock;
  },
  /**
   * Reconfigure this block based on the mutator dialog's components.
   * @param {!Blockly.Block} containerBlock Root block in mutator.
   * @this Blockly.Block
   */
  compose: function(containerBlock) {
    // Parameter list.
    this.arguments_ = [];
    this.paramIds_ = [];
    var paramBlock = containerBlock.getInputTargetBlock('STACK');
    while (paramBlock) {
      this.arguments_.push(paramBlock.getFieldValue('NAME'));
      this.paramIds_.push(paramBlock.id);
      paramBlock = paramBlock.nextConnection &&
          paramBlock.nextConnection.targetBlock();
    }
    this.updateParams_();
    Blockly.Procedures.mutateCallers(this.getFieldValue('NAME'),
        this.workspace, this.arguments_, this.paramIds_);

    // Show/hide the statement input.
    var hasStatements = containerBlock.getFieldValue('STATEMENTS');
    if (hasStatements !== null) {
      hasStatements = hasStatements == 'TRUE';
      if (this.hasStatements_ != hasStatements) {
        if (hasStatements) {
          this.setStatements_(true);
          // Restore the stack, if one was saved.
          var stackConnection = this.getInput('STACK').connection;
          if (stackConnection.targetConnection ||
              !this.statementConnection_ ||
              this.statementConnection_.targetConnection ||
              this.statementConnection_.sourceBlock_.workspace !=
              this.workspace) {
            // Block no longer exists or has been attached elsewhere.
            this.statementConnection_ = null;
          } else {
            stackConnection.connect(this.statementConnection_);
          }
        } else {
          // Save the stack, then disconnect it.
          var stackConnection = this.getInput('STACK').connection;
          this.statementConnection_ = stackConnection.targetConnection;
          if (this.statementConnection_) {
            var stackBlock = stackConnection.targetBlock();
            stackBlock.setParent(null);
            stackBlock.bumpNeighbours_();
          }
          this.setStatements_(false);
        }
      }
    }
  },
  /**
   * Dispose of any callers.
   * @this Blockly.Block
   */
  dispose: function() {
    var name = this.getFieldValue('NAME');
    Blockly.Procedures.disposeCallers(name, this.workspace);
    // Call parent's destructor.
    this.constructor.prototype.dispose.apply(this, arguments);
  },
  /**
   * Return the signature of this procedure definition.
   * @return {!Array} Tuple containing three elements:
   *     - the name of the defined procedure,
   *     - a list of all its arguments,
   *     - that it DOES NOT have a return value.
   * @this Blockly.Block
   */
  getProcedureDef: function() {
    return [this.getFieldValue('NAME'), this.arguments_, false];
  },
  /**
   * Return all variables referenced by this block.
   * @return {!Array.<string>} List of variable names.
   * @this Blockly.Block
   */
  getVars: function() {
    return this.arguments_;
  },
  /**
   * Notification that a variable is renaming.
   * If the name matches one of this block's variables, rename it.
   * @param {string} oldName Previous name of variable.
   * @param {string} newName Renamed variable.
   * @this Blockly.Block
   */
  renameVar: function(oldName, newName) {
    var change = false;
    for (var i = 0; i < this.arguments_.length; i++) {
      if (Blockly.Names.equals(oldName, this.arguments_[i])) {
        this.arguments_[i] = newName;
        change = true;
      }
    }
    if (change) {
      this.updateParams_();
      // Update the mutator's variables if the mutator is open.
      if (this.mutator.isVisible_()) {
        var blocks = this.mutator.workspace_.getAllBlocks();
        for (var i = 0, block; block = blocks[i]; i++) {
          if (block.type == 'procedures_mutatorarg' &&
              Blockly.Names.equals(oldName, block.getFieldValue('NAME'))) {
            block.setFieldValue(newName, 'NAME');
          }
        }
      }
    }
  },
  /**
   * Add custom menu options to this block's context menu.
   * @param {!Array} options List of menu options to add to.
   * @this Blockly.Block
   */
  customContextMenu: function(options) {
    // Add option to create caller.
    var option = {enabled: true};
    var name = this.getFieldValue('NAME');
    option.text = Blockly.Msg.PROCEDURES_CREATE_DO.replace('%1', name);
    var xmlMutation = goog.dom.createDom('mutation');
    xmlMutation.setAttribute('name', name);
    for (var i = 0; i < this.arguments_.length; i++) {
      var xmlArg = goog.dom.createDom('arg');
      xmlArg.setAttribute('name', this.arguments_[i]);
      xmlMutation.appendChild(xmlArg);
    }
    var xmlBlock = goog.dom.createDom('block', null, xmlMutation);
    xmlBlock.setAttribute('type', this.callType_);
    option.callback = Blockly.ContextMenu.callbackFactory(this, xmlBlock);
    options.push(option);

    // Add options to create getters for each parameter.
    if (!this.isCollapsed()) {
      for (var i = 0; i < this.arguments_.length; i++) {
        var option = {enabled: true};
        var name = this.arguments_[i];
        option.text = Blockly.Msg.VARIABLES_SET_CREATE_GET.replace('%1', name);
        var xmlField = goog.dom.createDom('field', null, name);
        xmlField.setAttribute('name', 'VAR');
        var xmlBlock = goog.dom.createDom('block', null, xmlField);
        xmlBlock.setAttribute('type', 'variables_get');
        option.callback = Blockly.ContextMenu.callbackFactory(this, xmlBlock);
        options.push(option);
      }
    }
  },
  callType_: 'procedures_callnoreturn'
};

Blockly.Blocks['mc_print_msg'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Print Message");
    this.appendValueInput("msg");
    this.appendDummyInput()
        .appendField("for Player")
        .appendField(new Blockly.FieldVariable("Player"), "plr_name");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['mc_start_builder'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(120);
    this.appendDummyInput()
        .appendField("Start Builder")
        .appendField("Player Name")
        .appendField(new Blockly.FieldTextInput("default"), "plr_name");
	this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['mc_start_builder_at'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Start Builder")
		.appendField("using Player Name")
        .appendField(new Blockly.FieldTextInput("default"), "plr_name")
		.appendField("at");
    this.appendValueInput("bldrX")
        .appendField("X");
    this.appendValueInput("bldrY")
        .appendField("Y");
    this.appendValueInput("bldrZ")
        .appendField("Z");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['mc_drone_up'] = {
  init: function() {
    this.appendValueInput("num_units")
        .setCheck("Number")
        .appendField("Move Builder Up");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['mc_drone_down'] = {
  init: function() {
    this.appendValueInput("num_units")
        .setCheck("Number")
        .appendField("Move Builder Down");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['mc_drone_left'] = {
  init: function() {
    this.appendValueInput("num_units")
        .setCheck("Number")
        .appendField("Move Builder Left");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['mc_drone_right'] = {
  init: function() {
    this.appendValueInput("num_units")
        .setCheck("Number")
        .appendField("Move Builder Right");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};


Blockly.Blocks['mc_drone_fwd'] = {
  init: function() {
    this.appendValueInput("num_units")
        .setCheck("Number")
        .appendField("Move Builder Forward");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['mc_drone_back'] = {
  init: function() {
    this.appendValueInput("num_units")
        .setCheck("Number")
        .appendField("Move Builder Back");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['mc_drone_turn'] = {
  init: function() {
    this.appendValueInput("num_units")
        .setCheck("Number")
        .appendField("Turn Builder Around");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};



Blockly.Blocks['mc_blocks'] = {
  init: function() {
    this.appendDummyInput()
		.appendField("Block Type")
        .appendField(new Blockly.FieldDropdown([["Cobblestone", "blocks.cobblestone"], ["Wooden Planks", "blocks.oak"], ["Birch", "blocks.birch"], ["Stone bricks", "blocks.brick.stone"], ["Red bricks", "blocks.brick.red"], ["Sign", "blocks.sign"], ["Glass", "blocks.glass"], ["Glass panes", "blocks.glass_pane"], ["Air", "blocks.air"], ["Iron", "blocks.iron"],
 		  ["White Wool","blocks.wool.white"],
		  ["Orange Wool","blocks.wool.orange"],
		  ["Magenta Wool","blocks.wool.magenta"],
		  ["Light Blue Wool","blocks.wool.lightblue"],
		  ["Yellow Wool","blocks.wool.yellow"],
		  ["Lime Wool","blocks.wool.lime"],
		  ["Pink Wool","blocks.wool.pink"],
		  ["Gray Wool","blocks.wool.gray"],
		  ["Light Gray Wool","blocks.wool.lightgray"],
		  ["Cyan Wool","blocks.wool.cyan"],
		  ["Purple Wool","blocks.wool.purple"],
		  ["Blue Wool","blocks.wool.blue"],
		  ["Brown Wool","blocks.wool.brown"],
		  ["Green Wool","blocks.wool.green"],
		  ["Red Wool","blocks.wool.red"],
		  ["Black Wool","blocks.wool.black"],
		  ["White Glass","blocks.stained_glass.white"],
		  ["Orange Glass","blocks.stained_glass.orange"],
		  ["Magenta Glass","blocks.stained_glass.magenta"],
		  ["Light Blue Glass","blocks.stained_glass.lightblue"],
		  ["Yellow Glass","blocks.stained_glass.yellow"],
		  ["Lime Glass","blocks.stained_glass.lime"],
		  ["Pink Glass","blocks.stained_glass.pink"],
		  ["Gray Glass","blocks.stained_glass.gray"],
		  ["Light Gray Glass","blocks.stained_glass.lightgray"],
		  ["Cyan Glass","blocks.stained_glass.cyan"],
		  ["Purple Glass","blocks.stained_glass.purple"],
		  ["Blue Glass","blocks.stained_glass.blue"],
		  ["Brown Glass","blocks.stained_glass.brown"],
		  ["Green Glass","blocks.stained_glass.green"],
		  ["Red Glass","blocks.stained_glass.red"],
		  ["Black Glass","blocks.stained_glass.black"]
	]), "blk_to_use");
    this.setOutput(true);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['mc_entitytypes'] = {
  init: function() {
    this.appendDummyInput()
		.appendField("Entity Type")
        .appendField(new Blockly.FieldDropdown([
		["Chicken", "CHICKEN"], 
		["Cow", "COW"], 
		["Pig", "PIG"], 
		["Rabbit", "RABBIT"], 
		["Sheep", "SHEEP"],
		["Horse","HORSE"],
		["Squid","SQUID"],
		["Wolf","WOLF"],
		["Ocelot","OCELOT"],
		["Slime","SLIME"],
		["Skeleton", "SKELETON"], 
		["Creeper", "CREEPER"], 
		["Spider", "SPIDER"], 
		["Zombie", "ZOMBIE"], 
		["Player", "PLAYER"] 
	]), "entity_to_use");
    this.setOutput(true);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
												
Blockly.Blocks['mc_box'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Box");
    this.appendValueInput("blk")
        .appendField("Block");
    this.appendValueInput("width")
        .setCheck("Number")
        .appendField("Width");
    this.appendValueInput("height")
        .setCheck("Number")
        .appendField("Height");
    this.appendValueInput("depth")
        .setCheck("Number")
        .appendField("Depth");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['mc_clear_area'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Clear Area");
    this.appendValueInput("width")
        .setCheck("Number")
        .appendField("Width");
    this.appendValueInput("height")
        .setCheck("Number")
        .appendField("Height");
    this.appendValueInput("depth")
        .setCheck("Number")
        .appendField("Depth");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['mc_box0'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Hollow Box");
    this.appendValueInput("blk")
        .appendField("Block");
    this.appendValueInput("width")
        .setCheck("Number")
        .appendField("Width");
    this.appendValueInput("height")
        .setCheck("Number")
        .appendField("Height");
    this.appendValueInput("depth")
        .setCheck("Number")
        .appendField("Depth");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['mc_prism'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Prism");
    this.appendValueInput("blk")
        .appendField("Block");
    this.appendValueInput("width")
        .setCheck("Number")
        .appendField("Width");
    this.appendValueInput("depth")
        .setCheck("Number")
        .appendField("Depth");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['mc_prism0'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Hollow Prism");
    this.appendValueInput("blk")
        .appendField("Block");
    this.appendValueInput("width")
        .setCheck("Number")
        .appendField("Width");
    this.appendValueInput("depth")
        .setCheck("Number")
        .appendField("Depth");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};


Blockly.Blocks['mc_hemi'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Dome");
    this.appendValueInput("blk")
        .appendField("Block");
    this.appendValueInput("radius")
        .setCheck("Number")
        .appendField("Radius");
   this.appendDummyInput()
		.appendField("Dome Direction")
        .appendField(new Blockly.FieldDropdown([["up", "north"], ["down", "south"]]), "dir");
	this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['mc_hemi0'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Hollow Dome");
    this.appendValueInput("blk")
        .appendField("Block");
    this.appendValueInput("radius")
        .setCheck("Number")
        .appendField("Radius");
   this.appendDummyInput()
		.appendField("Dome Direction")
        .appendField(new Blockly.FieldDropdown([["up", "north"], ["down", "south"]]), "dir");
	this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};



Blockly.Blocks['mc_checkpoint'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set Checkpoint");
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("CheckPoint"), "checkpoint");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['mc_moveto_chkpt'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Move To Checkpoint");
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("CheckPoint"), "checkpoint");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['mc_reg_event'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Respond to Event")
        .appendField(new Blockly.FieldDropdown([["Death", "entityDeath"], ["Damage", "entityDamage"], ["Block Destroy", "blockDestroy"]]), "evt_type");
    this.appendStatementInput("evt_callb")
        .appendField("Name")
        .appendField(new Blockly.FieldTextInput("default"), "NAME");
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['mc_event_info'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Event Information")
        .appendField(new Blockly.FieldDropdown([["Target", "event.entity"], ["Target Type", "event.entity.entityType.toString()"], ["Target X", "event.entity.x"], ["Target Y", "event.entity.y"], ["Target Z", "event.entity.z"], ["Attacker", "event.getDamageSource().getDamageDealer()"], ["Attacker Name", "event.getDamageSource().getDamageDealer().name"], ["Block Breaker", "event.player"], ["Block Breaker Name", "event.player.name"], ["Block X", "event.block.x"], ["Block Y", "event.block.y"], ["Block Z", "event.block.z"], ["Block Type", "event.block.type.toString().split('[')[0]"]]), "evt_info");
    this.setOutput(true);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['mc_make_explosion'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Make Explosion: exploder")
        .appendField(new Blockly.FieldVariable("Player"), "plyr");
    this.appendValueInput("x")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Target X");
    this.appendValueInput("y")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Target Y");
    this.appendValueInput("z")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Target Z");
    this.appendValueInput("power")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("power");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['mc_set_timeout'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set Timeout using function:")
        .appendField(new Blockly.FieldTextInput("function"), "callbk");
    this.appendValueInput("milisecs")
        .setCheck("Number")
        .appendField("after");
    this.appendDummyInput()
        .appendField("Seconds");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['mc_drone_cottage'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Build a Cottage");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['mc_drone_cottage_road'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Build a Cottage Road");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['mc_drone_castle'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Build a Castle");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['mc_drone_temple'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Build a Temple");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['mc_drone_rainbow'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Make a Rainbow");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
var  cpxcol = "#FF0000";
Blockly.Blocks['import_busio'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('Use the BusIO Utility Library');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(cpxcol);
      this.setTooltip('Imports the BUSIO library.');
      this.setHelpUrl('http://www.example.com/');
    },
};

Blockly.Blocks['mx_8_8_2_init'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('Initialize the Matrix');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(cpxcol);
      this.setTooltip('Start the Matrix.');
      this.setHelpUrl('http://www.example.com/');
    },
};

Blockly.Blocks['mx_8_8_2_show'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('Show Matrix');
      this.appendDummyInput()
            .appendField(new Blockly.FieldVariable("mt"), "NAME");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(cpxcol);
      this.setTooltip('Show updated pixel on matrix');
      this.setHelpUrl('http://www.example.com/');
      this.setInputsInline(true);
    },
};

Blockly.Blocks['mx_8_8_2_auto'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('Set Matrix ');
      this.appendDummyInput()
            .appendField(new Blockly.FieldVariable("mt"), "NAME")
            .appendField(' Auto-Write to ');
      this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(new Blockly.FieldDropdown([["True", "True"],["False", "False"]]), "autowrite");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(cpxcol);
      this.setTooltip('Set matrix to automatically show pixel updates');
      this.setHelpUrl('http://www.example.com/');
      this.setInputsInline(true);
    },
};

Blockly.Blocks['mx_8_8_2_fill'] = {
    init: function () {
    	this.appendDummyInput()
    		.appendField("Fill Matrix ");
        this.appendDummyInput()
            .appendField(new Blockly.FieldVariable("mt"), "NAME")
            .appendField(" with color");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(new Blockly.FieldDropdown([["None", "0"],["Red", "2"], ["Orange", "3"],["Green", "5"]]), "fillcolor");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(cpxcol);
        this.setTooltip("Fill the Matrix with color");
        this.setHelpUrl("");
        this.setInputsInline(true);
    }
};

Blockly.Blocks['mx_8_8_2_bright'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Set Brightness of Matrix ");
        this.appendDummyInput()
            .appendField(new Blockly.FieldVariable("mt"), "NAME")
            .appendField(" to ");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(new Blockly.FieldDropdown([["1", "1"],["2", "2"], ["3", "3"],["4", "4"],["5", "5"],["6", "6"],["7", "7"],["8", "8"],["9", "9"],["10", "10"],["11", "11"],["12", "12"],["13", "13"],["14", "14"],["15", "15"]]), "brightness");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(cpxcol);
        this.setTooltip("Set the Matrix brightness");
        this.setHelpUrl("");
        this.setInputsInline(true);
    }
};

Blockly.Blocks['mx_8_8_2_pixel'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Set Pixel at x: ");
        this.appendValueInput("x")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(" and y: ");
        this.appendValueInput("y")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(" on matrix ")
            .appendField(new Blockly.FieldVariable("mt"), "NAME")
            .appendField(" to color");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(new Blockly.FieldDropdown([["None", "0"],["Red", "2"], ["Orange", "3"],["Green", "5"]]), "pixcolor");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(cpxcol);
        this.setTooltip("Set a pixel on the Matrix to color");
        this.setHelpUrl("");
        this.setInputsInline(true);
    }
};

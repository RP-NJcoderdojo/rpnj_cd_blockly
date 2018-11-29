var  cpxcol = "#556EE6";  
Blockly.Blocks['import_cpx'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('Use the Circuit Playground Express Library');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(cpxcol);
      this.setTooltip('Imports the CPX library.');
      this.setHelpUrl('http://www.example.com/');
    },
  };
Blockly.Blocks['redled'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Set the board Red LED ");
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["On", "True"], ["Off", "False"]]), "led_val");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(cpxcol);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['switch'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Is Switch on Left?");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(cpxcol);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['detect_taps'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Set Board Being ");
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["Single", "1"], ["Double", "2"]]), "tapped_val");
        this.appendDummyInput()
            .appendField("tapped");
        //this.appendValueInput("text")
        //    .setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(cpxcol);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['tapped'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Is Tapped");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(cpxcol);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['shake'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Is Shaken with value");
        this.appendValueInput("text")
            .setCheck(null);
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(cpxcol);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['light'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Get light level");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(cpxcol);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['acc'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Get Acceleration");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(cpxcol);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['acc_vals'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Acceleration value")
            .appendField(new Blockly.FieldDropdown([["X", "0"], ["Y", "1"],["Z", "2"]]), "accel_val")
            .appendField("of")
            .appendField(new Blockly.FieldVariable("accel"), "NAME");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(cpxcol);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['button'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["Button A", "a"], ["Button B", "b"]]), "button");
         this.appendDummyInput()
            .appendField("is pressed");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(cpxcol);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['temp'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Get Temperature");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(cpxcol);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['touchdrop'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Pad ")
            .appendField(new Blockly.FieldDropdown([["A1", "A1"], ["A2", "A2"], ["A3", "A3"], ["A4", "A4"], ["A5", "A5"], ["A6", "A6"], ["A7", "A7"]]), "button")
            .appendField(" is Being Touched");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(cpxcol);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['playtone'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Play a ");
        this.appendValueInput("text1")
            .setCheck(null);
        this.appendDummyInput()
            .appendField("Hz Tone for ");
        this.appendValueInput("text2")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(" seconds ");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(cpxcol);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['starttone'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Start Playing a ");
        this.appendValueInput("text")
            .setCheck(null);
        this.appendDummyInput()
            .appendField("Hz Tone");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(cpxcol);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['stoptone'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Stop playing tone");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(cpxcol);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['playfile'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Play sound file");
        this.appendValueInput("text")
            .setCheck(null);
        //this.appendDummyInput()
        //    .appendField(")");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(cpxcol);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

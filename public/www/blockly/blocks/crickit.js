var  cpxcol = "#556EE6";
Blockly.Blocks['import_crickit'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('Use Crickit Library');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(cpxcol);
      this.setTooltip('Imports the Crickit library.');
      this.setHelpUrl('http://www.example.com/');
    },
  };
 Blockly.Blocks['import_board'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('Use the board Library');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(cpxcol);
      this.setTooltip('Imports the Board library.');
      this.setHelpUrl('http://www.example.com/');
    },
  };
 Blockly.Blocks['crkt_set_servo_ang'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("cricket set servo");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["1", "servo_1"], ["2", "servo_2"], ["3", "servo_3"], ["4", "servo_4"]]), "servo");
    this.appendDummyInput()
        .appendField("angle to");
    this.appendValueInput("ANGLE")
        .setCheck(null)
        .appendField("");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['crkt_cont_servo_speed'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("cricket continuous servo");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["1", "continuous_servo_1"], ["2", "continuous_servo_2"], ["3", "continuous_servo_3"], ["4", "continuous_servo_4"]]), "servo");
    this.appendDummyInput()
        .appendField("run at");
    this.appendValueInput("SPEED")
        .setCheck(null)
        .appendField("");
    this.appendDummyInput()
        .appendField("%");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['crkt_motor_speed'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("cricket run motor");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["1", "dc_motor_1"], ["2", "dc_motor_2"]]), "motor");
    this.appendDummyInput()
        .appendField("at");
    this.appendValueInput("SPEED")
        .setCheck(null)
        .appendField("");
    this.appendDummyInput()
        .appendField("%");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['crkt_motor_stop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("cricket stop motor");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["1", "dc_motor_1"], ["2", "dc_motor_2"]]), "motor");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

 Blockly.Blocks['crkt_neo_fill'] = {
        init: function () {
          this.appendDummyInput()
            .appendField(" Crickit Fill NeoPixels ");
            this.appendDummyInput()
                .appendField(new Blockly.FieldVariable("np"), "NAME")
                .appendField(" with color ");
            this.appendDummyInput()
                .appendField("Red: ");
            this.appendValueInput("textRed")
                .setCheck(null);
            this.appendDummyInput()
                .appendField("Green: ");
            this.appendValueInput("textGreen")
                .setCheck(null);
            this.appendDummyInput()
                .appendField("Blue: ");
            this.appendValueInput("textBlue")
                .setCheck(null);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(150);
            this.setTooltip("Fill the Neopixels with color");
            this.setHelpUrl("");
            this.setInputsInline(true);
        }
    };

Blockly.Blocks['crkt_neo_neovarnew'] = {
        init: function () {
            this.appendDummyInput()
                .appendField("Crickit Set Single NeoPixel ");
            this.appendValueInput("text")
                .setCheck(null);
            this.appendDummyInput()
                .appendField(" of ")
                .appendField(new Blockly.FieldVariable("np"), "NAME")
                .appendField(" to color ");
            this.appendDummyInput()
                .appendField("Red: ");
            this.appendValueInput("textRed")
                .setCheck(null);
            this.appendDummyInput()
                .appendField("Green: ");
            this.appendValueInput("textGreen")
                .setCheck(null);
            this.appendDummyInput()
                .appendField("Blue: ");
            this.appendValueInput("textBlue")
                .setCheck(null);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(150);
            this.setTooltip("Set Neopixel Color");
            this.setHelpUrl("");
            this.setInputsInline(true);
        }
    };

    Blockly.Blocks['crkt_neo_setneo'] = {
        init: function () {
          this.appendDummyInput()
            .appendField(" Crickit Create NeoPixels ");
          this.appendDummyInput()
                .appendField(new Blockly.FieldVariable("np"), "NAME");
          this.appendValueInput("numPix")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("with this Num of Pixels: ");
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour(150);
          this.setTooltip("Configure a new Neopixels strand");
          this.setHelpUrl("");
          this.setInputsInline(true);
        }
    };

    Blockly.Blocks['crkt_dig_read'] = {
      init: function() {
        this.appendDummyInput()
            .appendField("Crickit Digital Read Signal");
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["1", "crickit.SIGNAL1"], ["2", "crickit.SIGNAL2"], ["3", "crickit.SIGNAL3"], ["4", "crickit.SIGNAL4"], ["5", "crickit.SIGNAL5"], ["6", "crickit.SIGNAL6"], ["7", "crickit.SIGNAL7"], ["8", "crickit.SIGNAL8"]]), "sig_num");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(120);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
      }
    };

    Blockly.Blocks['crkt_ana_read'] = {
      init: function() {
        this.appendDummyInput()
            .appendField("Crickit Analog Read Signal");
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["1", "crickit.SIGNAL1"], ["2", "crickit.SIGNAL2"], ["3", "crickit.SIGNAL3"], ["4", "crickit.SIGNAL4"], ["5", "crickit.SIGNAL5"], ["6", "crickit.SIGNAL6"], ["7", "crickit.SIGNAL7"], ["8", "crickit.SIGNAL8"]]), "sig_num");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(120);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
      }
    };

    Blockly.Blocks['crkt_dig_write'] = {
      init: function() {
        this.appendDummyInput()
            .appendField("Crickit Digital Write Signal");
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["1", "crickit.SIGNAL1"], ["2", "crickit.SIGNAL2"], ["3", "crickit.SIGNAL3"], ["4", "crickit.SIGNAL4"], ["5", "crickit.SIGNAL5"], ["6", "crickit.SIGNAL6"], ["7", "crickit.SIGNAL7"], ["8", "crickit.SIGNAL8"]]), "sig_num");
        this.appendDummyInput()
            .appendField("to");
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["Low", "False"], ["High", "True"]]), "sig_val");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
      }
    };
    
    Blockly.Blocks['crkt_sig_pin_mode'] = {
      init: function() {
        this.appendDummyInput()
            .appendField("Crickit Set Pin Mode");
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["1", "crickit.SIGNAL1"], ["2", "crickit.SIGNAL2"], ["3", "crickit.SIGNAL3"], ["4", "crickit.SIGNAL4"], ["5", "crickit.SIGNAL5"], ["6", "crickit.SIGNAL6"], ["7", "crickit.SIGNAL7"], ["8", "crickit.SIGNAL8"]]), "sig_num");
        this.appendDummyInput()
            .appendField("to");
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["Input", "crickit.seesaw.INPUT_PULLUP"], ["Output", "crickit.seesaw.OUTPUT"]]), "sig_val");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
      }
    };

var  cpxcol = "#556EE6";
Blockly.Blocks['import_fancyLED'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('Use FancyLED Library');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(cpxcol);
      this.setTooltip('Imports the FancyLED library.');
      this.setHelpUrl('http://www.example.com/');
    },
  };

Blockly.Blocks['crkt_neo_fill_var'] = {
        init: function () {
          this.appendDummyInput()
            .appendField("Fancy Fill NeoPixels ");
            this.appendDummyInput()
                .appendField(new Blockly.FieldVariable("np"), "NAME")
                .appendField(" with color variable ");
            this.appendDummyInput()
                .appendField(new Blockly.FieldVariable("colorVar"), "colorVar");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(150);
            this.setTooltip("Fill the Neopixels with color");
            this.setHelpUrl("");
            this.setInputsInline(true);
        }
    };

Blockly.Blocks['crkt_neo_neovarnew_var'] = {
        init: function () {
            this.appendDummyInput()
                .appendField("Fancy Set Single NeoPixel ");
            this.appendValueInput("text")
                .setCheck(null);
            this.appendDummyInput()
                .appendField(" of ")
                .appendField(new Blockly.FieldVariable("np"), "NAME")
                .appendField(" with color variable ");
            this.appendDummyInput()
                .appendField(new Blockly.FieldVariable("colorVar"), "colorVar");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(150);
            this.setTooltip("Set Neopixel Color");
            this.setHelpUrl("");
            this.setInputsInline(true);
        }
    };

Blockly.Blocks['crkt_create_HSV_color'] = {
        init: function () {
            this.appendDummyInput()
                .appendField("Create Color using HSV settings");
            this.appendDummyInput()
                .appendField(new Blockly.FieldVariable("fancy"), "NAME")
                .appendField(" using values ");
            this.appendDummyInput()
                .appendField("Hue: ");
            this.appendValueInput("textHue")
                .setCheck(null);
            this.appendDummyInput()
                .appendField("Saturation: ");
            this.appendValueInput("textSat")
                .setCheck(null);
            this.appendDummyInput()
                .appendField("Value: ");
            this.appendValueInput("textVal")
                .setCheck(null);
            this.setOutput(true, null);
            this.setPreviousStatement(false, null);
            this.setNextStatement(false, null);
            this.setColour(150);
            this.setTooltip("Set Neopixel Color");
            this.setHelpUrl("");
            this.setInputsInline(true);
        }
    };

Blockly.Blocks['crkt_pack_color'] = {
        init: function () {
            this.appendDummyInput()
                .appendField("Pack Color variable");
            this.appendDummyInput()
                .appendField(new Blockly.FieldVariable("color"), "NAME");
            this.setOutput(true, null);
            this.setPreviousStatement(false, null);
            this.setNextStatement(false, null);
            this.setColour(150);
            this.setTooltip("Set Neopixel Color");
            this.setHelpUrl("");
            this.setInputsInline(true);
        }
    };
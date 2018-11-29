var  cpxcol = "#556EE6";
    Blockly.Blocks['setneo'] = {
        init: function () {
        	this.appendDummyInput()
        		.appendField("Create External NeoPixel Strip Using Pin:");
            //this.appendDummyInput()
            //    .appendField(new Blockly.FieldVariable("np"), "NAME")
            //    .appendField(" Using Pin: ");
            //this.appendValueInput("text")
            //    .setCheck(null);
    		this.appendDummyInput()
        		.setAlign(Blockly.ALIGN_RIGHT)
        		.appendField(new Blockly.FieldDropdown([["A1", "board.A1"],["D2", "board.D2"],["D3", "board.D3"],["D4", "board.D4"],["D5", "board.D5"],["D6", "board.D6"],["D7", "board.D7"],["D8", "board.D8"],["D9", "board.D9"],["D10", "board.D10"],["D11", "board.D11"],["D12", "board.D12"],["D13", "board.D13"],["D14", "board.D14"],["D15", "board.D15"],["D16", "board.D16"],["D17", "board.D17"],["D18", "board.D18"],["D19", "board.D19"],["D20", "board.D20"],["D22", "board.D22"], ["D23", "board.D23"], ["D24", "board.D24"], ["D25", "board.D25"],["D26", "board.D26"], ["D27", "board.D27"]]), "pin");
 			this.appendValueInput("numPix")
        		.setAlign(Blockly.ALIGN_RIGHT)
        		.appendField("with this Num of Pixels: ");
            this.appendDummyInput()
                .appendField(" using this color order");
			this.appendDummyInput()
        		.setAlign(Blockly.ALIGN_RIGHT)
        		.appendField(new Blockly.FieldDropdown([["RGB", "neopixel.RGB"], ["GRB", "neopixel.GRB"],["RGBW", "neopixel.RGBW"], ["GRBW", "neopixel.GRBW"]]), "pixorder");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(150);
            this.setTooltip("Configure a new Neopixels strand");
            this.setHelpUrl("");
            this.setInputsInline(true);
        }
    };
    Blockly.Blocks['fill'] = {
        init: function () {
        	this.appendDummyInput()
        		.appendField("Fill NeoPixels on ");
            this.appendDummyInput()
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField(new Blockly.FieldDropdown([["External", "ext"], ["Onboard", "onb"]]), "typestrip");
            this.appendDummyInput()
            //    .appendField(new Blockly.FieldVariable("np"), "NAME")
                .appendField("strip, with color ");
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
    Blockly.Blocks['neovarnew'] = {
        init: function () {
            this.appendDummyInput()
                .appendField("Set Pixel ");
            this.appendValueInput("text")
                .setCheck(null);
            this.appendDummyInput()
                .appendField(" on ")
                .appendField(new Blockly.FieldDropdown([["External", "ext"], ["Onboard", "onb"]]), "typestrip")
            //    .appendField(new Blockly.FieldVariable("np"), "NAME")
                .appendField("strip, to color ");
            /*
            this.appendDummyInput()
                .appendField("(");
            this.appendValueInput("text1")
                .setCheck(null);
            this.appendDummyInput()
                .appendField(")");
			*/
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
            this.setTooltip("Set Neopixel Colour");
            this.setHelpUrl("");
            this.setInputsInline(true);
        }
    };
    Blockly.Blocks['importneo'] = {
        init: function () {
            this.appendDummyInput()
                .appendField("Use NeoPixel Library");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(cpxcol);
            this.setTooltip("Import the Neopixel Library");
            this.setHelpUrl("");
        }
    };
    Blockly.Blocks['neoshow'] = {
        init: function () {
            this.appendDummyInput()
                .appendField(new Blockly.FieldVariable("np"), "NAME")
                .appendField(".show()");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(150);
            this.setTooltip("Show the set neopixel config");
            this.setHelpUrl("");
        }
    };
    Blockly.Blocks['neoclear'] = {
        init: function () {
            this.appendDummyInput()
                .appendField(new Blockly.FieldVariable("np"), "NAME")
                .appendField(".clear()");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(150);
            this.setTooltip("Clear the set neopixel config");
            this.setHelpUrl("");
        }
    };
    Blockly.Blocks['neobrightness'] = {
  		init: function() {
    		this.setHelpUrl('http://www.example.com/');
    		this.setColour(150);
    		this.appendDummyInput()
        		.appendField("Set Brightness of ")
        		.appendField(new Blockly.FieldVariable("np"), "NAME");
    		this.appendValueInput("text")
        		.setCheck("Number")
        		.appendField("To");
    		this.setInputsInline(true);
    		this.setPreviousStatement(true);
    		this.setNextStatement(true);
    		this.setTooltip('');
  		}
	};

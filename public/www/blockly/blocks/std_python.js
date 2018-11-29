var  cpxcol = "#556EE6";
Blockly.Blocks['import_time'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('Use time Library');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(cpxcol);
      this.setTooltip('Imports the time library.');
      this.setHelpUrl('http://www.example.com/');
    },
  };

Blockly.Blocks['time_sleep'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);

    this.setColour(290);

    this.appendDummyInput()
        .appendField("Sleep");
  
    this.appendValueInput("sleeptime")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(" for");
  
    this.appendDummyInput()
        .appendField(" seconds");
    
    this.setInputsInline(true);
    this.setTooltip('');
  }
};
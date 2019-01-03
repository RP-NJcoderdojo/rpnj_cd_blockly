/**
 * @license
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Generating Python for variable blocks.
 * @author q.neutron@gmail.com (Quynh Neutron)
 */
'use strict';

goog.provide('Blockly.Python.variables');

goog.require('Blockly.Python');

Blockly.Python['import_crickit'] = function (block) {
    const code = 'from adafruit_crickit import crickit\n';
    return code;
};

Blockly.Python['import_board'] = function (block) {
    const code = 'import board\n';
    return code;
};

Blockly.Python['crkt_set_servo_ang'] = function(block) {
  var dropdown_servo = block.getFieldValue('servo');
  var value_angle = Blockly.JavaScript.valueToCode(block, 'ANGLE', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'crickit.'+dropdown_servo+'.angle = ' + value_angle + '\n';
  return code;
};
Blockly.Python['crkt_cont_servo_speed'] = function(block) {
  var dropdown_servo = block.getFieldValue('servo');
  var value_throttle = Blockly.JavaScript.valueToCode(block, 'SPEED', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'crickit.'+dropdown_servo+'.throttle = ' + value_throttle/100 + '\n';
  return code;
};

Blockly.Python['crkt_motor_speed'] = function(block) {
  var dropdown_motor = block.getFieldValue('motor');
  var value_speed = Blockly.JavaScript.valueToCode(block, 'SPEED', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'crickit.'+dropdown_motor+'.throttle = ' + value_speed/100 + '\n';
  return code;
};

Blockly.Python['crkt_motor_stop'] = function(block) {
  var dropdown_motor = block.getFieldValue('motor');
  // TODO: Assemble JavaScript into code variable.
  var code = 'crickit.'+dropdown_motor+'.throttle = 0\n';
  return code;
};

Blockly.Python['crkt_neo_fill'] = function (block) {
    var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
    var text_inputneoR = Blockly.Python.valueToCode(block, 'textRed', Blockly.Python.ORDER_ATOMIC)
        || '';
     var text_inputneoG = Blockly.Python.valueToCode(block, 'textGreen', Blockly.Python.ORDER_ATOMIC)
        || '';
    var text_inputneoB = Blockly.Python.valueToCode(block, 'textBlue', Blockly.Python.ORDER_ATOMIC)
        || '';

    var code = variable_name + '.fill((' + text_inputneoR +','+ text_inputneoG +','+ text_inputneoB + '))\n';
    return code;
};

Blockly.Python['crkt_neo_neovarnew'] = function (block) {
    var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
    var text_neonum = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    //var text_colour = Blockly.Python.valueToCode(block, 'text1', Blockly.Python.ORDER_ATOMIC);
    var text_inputneoR = Blockly.Python.valueToCode(block, 'textRed', Blockly.Python.ORDER_ATOMIC)
        || '';
     var text_inputneoG = Blockly.Python.valueToCode(block, 'textGreen', Blockly.Python.ORDER_ATOMIC)
        || '';
    var text_inputneoB = Blockly.Python.valueToCode(block, 'textBlue', Blockly.Python.ORDER_ATOMIC)
        || '';
    // TODO: Assemble Python into code variable.
    var code = variable_name + '[' + text_neonum + '] = ((' + text_inputneoR +','+ text_inputneoG +','+ text_inputneoB + '))\n';
    return code;
};

Blockly.Python['crkt_neo_setneo'] = function(block) {
   var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
   var dropdown_bright = block.getFieldValue('bright');
   var text_numPix = Blockly.Python.valueToCode(block, 'numPix', Blockly.Python.ORDER_ATOMIC)
        || '0';
  // TODO: Assemble JavaScript into code variable.
  var code = 'crickit.init_neopixel('+text_numPix+',brightness='+dropdown_bright+')\n';
  code = code + variable_name + '=' + 'crickit.neopixel\n';
  return code;
};

Blockly.Python['crkt_dig_read'] = function(block) {
  var dropdown_sig_num = block.getFieldValue('sig_num');
  // TODO: Assemble JavaScript into code variable.
  var code = 'crickit.seesaw.digital_read(' + dropdown_sig_num +')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['crkt_ana_read'] = function(block) {
  var dropdown_sig_num = block.getFieldValue('sig_num');
  // TODO: Assemble JavaScript into code variable.
  var code = 'crickit.seesaw.analog_read(' + dropdown_sig_num + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['crkt_dig_write'] = function(block) {
  var dropdown_sig_num = block.getFieldValue('sig_num');
  var dropdown_sig_val = block.getFieldValue('sig_val');
  // TODO: Assemble JavaScript into code variable.
  var code = 'crickit.seesaw.digital_write('+ dropdown_sig_num +','+ dropdown_sig_val +')\n';
  return code;
};

Blockly.Python['crkt_sig_pin_mode'] = function(block) {
  var dropdown_sig_num = block.getFieldValue('sig_num');
  var dropdown_sig_val = block.getFieldValue('sig_val');
  // TODO: Assemble JavaScript into code variable.
  var code = 'crickit.seesaw.pin_mode(' + dropdown_sig_num + ',' + dropdown_sig_val + ')\n';
  return code;
};

Blockly.Python['crkt_touched'] = function (block) {
    var dropdown_pad = block.getFieldValue('pad');
    // TODO: Assemble Python into code variable.
    var code = 'crickit.' + dropdown_pad + '.value';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['crkt_touch_rawval'] = function (block) {
    var dropdown_pad = block.getFieldValue('pad');
    // TODO: Assemble Python into code variable.
    var code = 'crickit.' + dropdown_pad + '.raw_value';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
};

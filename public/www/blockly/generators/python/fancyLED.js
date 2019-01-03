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

Blockly.Python['import_fancyLED'] = function (block) {
    const code = 'import adafruit_fancyled.adafruit_fancyled as fancy\n';
    return code;
};

Blockly.Python['crkt_neo_fill_var'] = function (block) {
    var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
    var variable_color = Blockly.Python.variableDB_.getName(block.getFieldValue('colorVar'), Blockly.Variables.NAME_TYPE);
    var code = variable_name + '.fill(' + variable_color + ')\n';
    return code;
};

Blockly.Python['crkt_neo_neovarnew_var'] = function (block) {
    var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
    var text_neonum = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    var variable_color = Blockly.Python.variableDB_.getName(block.getFieldValue('colorVar'), Blockly.Variables.NAME_TYPE);
    //var text_colour = Blockly.Python.valueToCode(block, 'text1', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = variable_name + '[' + text_neonum + '] = (' + variable_color + ')\n';
    return code;
};

Blockly.Python['crkt_create_HSV_color'] = function (block) {
    var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
    var text_inputHue = Blockly.Python.valueToCode(block, 'textHue', Blockly.Python.ORDER_ATOMIC)
        || '';
     var text_inputSat = Blockly.Python.valueToCode(block, 'textSat', Blockly.Python.ORDER_ATOMIC)
        || '';
    var text_inputVal = Blockly.Python.valueToCode(block, 'textVal', Blockly.Python.ORDER_ATOMIC)
        || '';
    
    var code = variable_name + '.CHSV(' + text_inputHue +','+ text_inputSat +','+ text_inputVal + ')\n';
    return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['crkt_pack_color'] = function (block) {
    var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);    
    var code = variable_name + '.pack()\n';
    return [code, Blockly.Python.ORDER_NONE];
};

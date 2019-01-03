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

    Blockly.Python['import_busio'] = function (block) {
        const code = 'import busio\n';
        return code;
    };

    Blockly.Python['mx_8_8_2_init'] = function (block) {
        
        var code = 'from adafruit_ht16k33.matrix import Matrix8x8x2\n';
        code = code + 'i2c = busio.I2C(board.SCL, board.SDA)\n';
        code = code + 'mt = Matrix8x8x2(i2c)\n';
        return code;
    };

    Blockly.Python['mx_8_8_2_fill'] = function (block) {
        var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
        //var variable_name;
        var dropdown_fillcolor = block.getFieldValue('fillcolor');
        var code = variable_name + '.fill(' + dropdown_fillcolor + ')\n';
        return code;
    };

    Blockly.Python['mx_8_8_2_show'] = function (block) {
        var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
        //var variable_name;
        //var dropdown_fillcolor = block.getFieldValue('fillcolor');
        var code = variable_name + '.show()\n';
        return code;
    };

    Blockly.Python['mx_8_8_2_auto'] = function (block) {
        var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
        //var variable_name;
        //var dropdown_fillcolor = block.getFieldValue('fillcolor');
        var dropdown_autowrite = block.getFieldValue('autowrite');
        var code = variable_name + '.auto_write = ' + dropdown_autowrite + '\n';
        return code;
    };

    Blockly.Python['mx_8_8_2_bright'] = function (block) {
        var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
        //var variable_name;
        //var dropdown_fillcolor = block.getFieldValue('fillcolor');
        var dropdown_brightness = block.getFieldValue('brightness');
        var code = variable_name + '.brightness = ' + dropdown_brightness + '\n';
        return code;
    };

    Blockly.Python['mx_8_8_2_pixel'] = function (block) {
        var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
                
        var text_x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
        var text_y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
        var dropdown_pixcolor = block.getFieldValue('pixcolor');

        // TODO: Assemble Python into code variable.
        var code = variable_name + '.pixel(' + text_x + ',' + text_y +','+ dropdown_pixcolor +')\n';
        return code;
    };


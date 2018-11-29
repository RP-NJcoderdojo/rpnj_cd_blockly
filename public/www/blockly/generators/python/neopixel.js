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

    Blockly.Python['setneo'] = function (block) {
        //var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
        //var text_inputneo = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC)
        var dropdown_pin = block.getFieldValue('pin');
        var dropdown_pixorder = block.getFieldValue('pixorder');
        var num_pix = Blockly.Python.valueToCode(block, 'numPix', Blockly.Python.ORDER_ATOMIC)
            || '';
        //var code = variable_name + ' = neopixel.NeoPixel(' + dropdown_pin + ',' + num_pix + ', auto_write=False, pixel_order='+ dropdown_pixorder +')\n';
        var code = 'np = neopixel.NeoPixel(' + dropdown_pin + ',' + num_pix + ', auto_write=False, pixel_order='+ dropdown_pixorder +')\n';
        return code;
    };
    Blockly.Python['fill'] = function (block) {
        //var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
        var variable_name;
        var text_inputneoR = Blockly.Python.valueToCode(block, 'textRed', Blockly.Python.ORDER_ATOMIC)
            || '';
         var text_inputneoG = Blockly.Python.valueToCode(block, 'textGreen', Blockly.Python.ORDER_ATOMIC)
            || '';
        var text_inputneoB = Blockly.Python.valueToCode(block, 'textBlue', Blockly.Python.ORDER_ATOMIC)
            || '';

        var dropdown_striptype = block.getFieldValue('typestrip');
        if (dropdown_striptype == 'ext') {
            variable_name = 'np';
        }
        if (dropdown_striptype == 'onb') {
            variable_name = 'cpx.pixels';
        }

        var code = variable_name + '.fill((' + text_inputneoR +','+ text_inputneoG +','+ text_inputneoB + '))\n';
        return code;
    };
    Blockly.Python['importneo'] = function (block) {
        var code = 'import neopixel\n';
        return code;
    };
    Blockly.Python['neovarnew'] = function (block) {
        //var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
        var variable_name;
        
        var text_neonum = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
        //var text_colour = Blockly.Python.valueToCode(block, 'text1', Blockly.Python.ORDER_ATOMIC);
        var text_inputneoR = Blockly.Python.valueToCode(block, 'textRed', Blockly.Python.ORDER_ATOMIC)
            || '';
         var text_inputneoG = Blockly.Python.valueToCode(block, 'textGreen', Blockly.Python.ORDER_ATOMIC)
            || '';
        var text_inputneoB = Blockly.Python.valueToCode(block, 'textBlue', Blockly.Python.ORDER_ATOMIC)
            || '';

        var dropdown_striptype = block.getFieldValue('typestrip');
        if (dropdown_striptype == 'ext') {
            variable_name = 'np';
        }
        if (dropdown_striptype == 'onb') {
            variable_name = 'cpx.pixels';
        }

        // TODO: Assemble Python into code variable.
        var code = variable_name + '[' + text_neonum + '] = ((' + text_inputneoR +','+ text_inputneoG +','+ text_inputneoB + '))\n';
        return code;
    };
    Blockly.Python['neoshow'] = function (block) {
        var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
        // TODO: Assemble Python into code variable.
        var code = variable_name + '.show()\n';
        return code;
    };
    Blockly.Python['neoclear'] = function (block) {
        var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
        // TODO: Assemble Python into code variable.
        var code = variable_name + '.fill((0,0,0))\n';
        return code;
    };
	Blockly.Python['neobrightness'] = function(block) {
		var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
		var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
		// TODO: Assemble JavaScript into code variable.
		var code = variable_name + '.brightness = ' +value_text + '\n';
		return code;
	};

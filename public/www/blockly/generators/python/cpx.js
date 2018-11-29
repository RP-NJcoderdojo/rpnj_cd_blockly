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

Blockly.Python['import_cpx'] = function (block) {
    const code = 'from adafruit_circuitplayground.express import cpx\n';
    return code;
};
Blockly.Python['import_board'] = function (block) {
    const code = 'import board\n';
    return code;
};
Blockly.Python['redled'] = function (block) {
    //var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    var value_text = block.getFieldValue('led_val');
    // TODO: Assemble Python into code variable.
    var code = 'cpx.red_led = ' + value_text + '\n';
    return code;
};
Blockly.Python['switch'] = function (block) {
    // TODO: Assemble Python into code variable.
    var code = 'cpx.switch';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['detect_taps'] = function (block) {
    //var value_name = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    var value_taps = block.getFieldValue('tapped_val');
    // TODO: Assemble Python into code variable.
    var code = 'cpx.detect_taps = ' + value_taps + '\n';
    return code;
};
Blockly.Python['tapped'] = function (block) {
    // TODO: Assemble Python into code variable.
    var code = 'cpx.tapped';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['shake'] = function (block) {
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'cpx.shake(' + value_text + ')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['light'] = function (block) {
    // TODO: Assemble Python into code variable.
    var code = 'cpx.light';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['acc'] = function (block) {
    // TODO: Assemble Python into code variable.
    var code = 'cpx.acceleration';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['acc_vals'] = function (block) {
    var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
    var value_acc_val = block.getFieldValue('accel_val');
    var code = variable_name + '['+ value_acc_val +']\n';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['button'] = function (block) {
    var dropdown_button = block.getFieldValue('button');
    // TODO: Assemble Python into code variable.
    var code = 'cpx.button_' + dropdown_button;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['temp'] = function (block) {
    // TODO: Assemble Python into code variable.
    var code = 'cpx.temperature';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['touchdrop'] = function (block) {
    var dropdown_button = block.getFieldValue('button');
    // TODO: Assemble Python into code variable.
    var code = 'cpx.touch_' + dropdown_button;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['playtone'] = function (block) {
    var value_text1 = Blockly.Python.valueToCode(block, 'text1', Blockly.Python.ORDER_ATOMIC);
    var value_text2 = Blockly.Python.valueToCode(block, 'text2', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'cpx.play_tone(' + value_text1 + ', ' + value_text2 + ')\n';
    return code;
};
Blockly.Python['starttone'] = function (block) {
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'cpx.start_tone(' + value_text + ')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['stoptone'] = function (block) {
    // TODO: Assemble Python into code variable.
    var code = 'cpx.stop_tone()';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['playfile'] = function (block) {
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'cpx.play_file(' + value_text + ')\n';
    return code;
};
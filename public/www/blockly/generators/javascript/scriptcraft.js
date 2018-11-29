/*
Blockly.JavaScript['functions_mc_func'] = function(block) {
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = 'exports.' + statements_name + ' = function() {\n';
  code += statements_name;
  code += '}\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
*/


Blockly.JavaScript['func_defreturn'] = function(block) {
  // Define a procedure with a return value.
  var funcName = Blockly.JavaScript.variableDB_.getName(
      block.getFieldValue('NAME'), Blockly.Procedures.NAME_TYPE);
  var branch = Blockly.JavaScript.statementToCode(block, 'STACK');
  if (Blockly.JavaScript.STATEMENT_PREFIX) {
    branch = Blockly.JavaScript.prefixLines(
        Blockly.JavaScript.STATEMENT_PREFIX.replace(/%1/g,
        '\'' + block.id + '\''), Blockly.JavaScript.INDENT) + branch;
  }
  if (Blockly.JavaScript.INFINITE_LOOP_TRAP) {
    branch = Blockly.JavaScript.INFINITE_LOOP_TRAP.replace(/%1/g,
        '\'' + block.id + '\'') + branch;
  }
  var returnValue = Blockly.JavaScript.valueToCode(block, 'RETURN',
      Blockly.JavaScript.ORDER_NONE) || '';
  if (returnValue) {
    returnValue = '  return ' + returnValue + ';\n';
  }
  var args = [];
  for (var x = 0; x < block.arguments_.length; x++) {
    args[x] = Blockly.JavaScript.variableDB_.getName(block.arguments_[x],
        Blockly.Variables.NAME_TYPE);
  }
  var code = 'exports.'+ funcName + ' = function (' + args.join(', ') + ') {\n' +
      branch + returnValue + '}';
  code = Blockly.JavaScript.scrub_(block, code);
  Blockly.JavaScript.definitions_[funcName] = code;
  return null;
};

// Defining a procedure without a return value uses the same generator as
// a procedure with a return value.
Blockly.JavaScript['functions_mc_func'] =
    Blockly.JavaScript['func_defreturn'];

Blockly.JavaScript['mc_func_return'] =
    Blockly.JavaScript['func_defreturn'];


Blockly.JavaScript['mc_print_msg'] = function(block) {
  var value_msg = Blockly.JavaScript.valueToCode(block, 'msg', Blockly.JavaScript.ORDER_ATOMIC);
  var variable_plr_name = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('plr_name'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = 'echo('+ variable_plr_name + ',' + value_msg + ');\n';
  return code;
};

Blockly.JavaScript['mc_start_builder'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var value_plr_name = block.getFieldValue('plr_name'); 
  //var code = 'var drone=box(blocks.air,1,1,1);\n';
  //var code = "var utils = require('utils');\n";	
  var code = "var drone= new Drone(require('utils').player('"+value_plr_name+"'));\n";
  return code;
};

Blockly.JavaScript['mc_start_builder_at'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var value_plr_name = block.getFieldValue('plr_name'); 
  //var code = 'var drone=box(blocks.air,1,1,1);\n';
  //var code = "var utils = require('utils');\n";	
  var code = "var drone= new Drone(require('utils').player('"+value_plr_name+"'));\n";
  return code;
};

Blockly.JavaScript['mc_start_builder_at'] = function(block) {
  var value_plr_name = block.getFieldValue('plr_name');
  var value_bldrx = Blockly.JavaScript.valueToCode(block, 'bldrX', Blockly.JavaScript.ORDER_ATOMIC);
  var value_bldry = Blockly.JavaScript.valueToCode(block, 'bldrY', Blockly.JavaScript.ORDER_ATOMIC);
  var value_bldrz = Blockly.JavaScript.valueToCode(block, 'bldrZ', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
 var code = "var drone = new Drone(require('utils').player('"+value_plr_name+"')," + value_bldrx+ "," + value_bldry + "," + value_bldrz + ");\n";
  return code;
};


Blockly.JavaScript['mc_drone_up'] = function(block) {
  var value_num_units = Blockly.JavaScript.valueToCode(block, 'num_units', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'drone.up(' + value_num_units + ');\n';
  return code;
};

Blockly.JavaScript['mc_drone_down'] = function(block) {
  var value_num_units = Blockly.JavaScript.valueToCode(block, 'num_units', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'drone.down(' + value_num_units + ');\n';
  return code;
};

Blockly.JavaScript['mc_drone_left'] = function(block) {
  var value_num_units = Blockly.JavaScript.valueToCode(block, 'num_units', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'drone.left(' + value_num_units + ');\n';
  return code;
};

Blockly.JavaScript['mc_drone_right'] = function(block) {
  var value_num_units = Blockly.JavaScript.valueToCode(block, 'num_units', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'drone.right(' + value_num_units + ');\n';
  return code;
};

Blockly.JavaScript['mc_drone_fwd'] = function(block) {
  var value_num_units = Blockly.JavaScript.valueToCode(block, 'num_units', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'drone.fwd(' + value_num_units + ');\n';
  return code;
};

Blockly.JavaScript['mc_drone_back'] = function(block) {
  var value_num_units = Blockly.JavaScript.valueToCode(block, 'num_units', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'drone.back(' + value_num_units + ');\n';
  return code;
};

Blockly.JavaScript['mc_drone_turn'] = function(block) {
  var value_num_units = Blockly.JavaScript.valueToCode(block, 'num_units', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'drone.turn(' + value_num_units + ');\n';
  return code;
};


Blockly.JavaScript['mc_blocks'] = function(block) {
  var dropdown_blk_to_use = block.getFieldValue('blk_to_use');
  // TODO: Assemble JavaScript into code variable.
  var code = dropdown_blk_to_use;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['mc_entitytypes'] = function(block) {
  var dropdown_entity_to_use = block.getFieldValue('entity_to_use');
  // TODO: Assemble JavaScript into code variable.
  var code = "'" + dropdown_entity_to_use + "'";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};


Blockly.JavaScript['mc_box'] = function(block) {
  
  var value_blk = Blockly.JavaScript.valueToCode(block, 'blk', Blockly.JavaScript.ORDER_ATOMIC) || "";
  var value_width = Blockly.JavaScript.valueToCode(block, 'width', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height = Blockly.JavaScript.valueToCode(block, 'height', Blockly.JavaScript.ORDER_ATOMIC);
  var value_depth = Blockly.JavaScript.valueToCode(block, 'depth', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'drone.box(';
  if (value_blk !== ""){
	code +=	 value_blk;
  }
  else {
	  code += 'blocks.air';
  }
  if (value_width !== ''){
	code +=	',' + value_width;
  }	
  if (value_height !== ''){
	code +=	',' + value_height;
  }	
  if (value_depth !== ''){
	code +=	',' + value_depth;
  }	
  code += ');\n';
  return code;
};

Blockly.JavaScript['mc_clear_area'] = 
	Blockly.JavaScript['mc_box'];

Blockly.JavaScript['mc_box0'] = function(block) {
  var value_blk = Blockly.JavaScript.valueToCode(block, 'blk', Blockly.JavaScript.ORDER_ATOMIC);
  var value_width = Blockly.JavaScript.valueToCode(block, 'width', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height = Blockly.JavaScript.valueToCode(block, 'height', Blockly.JavaScript.ORDER_ATOMIC);
  var value_depth = Blockly.JavaScript.valueToCode(block, 'depth', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'drone.box0(';
  if (value_blk !== ""){
	code +=	 value_blk;
  }		
  if (value_width !== ''){
	code +=	',' + value_width;
  }	
  if (value_height !== ''){
	code +=	',' + value_height;
  }	
  if (value_depth !== ''){
	code +=	',' + value_depth;
  }	
  code += ');\n';
  return code;
};

Blockly.JavaScript['mc_prism'] = function(block) {
  var value_blk = Blockly.JavaScript.valueToCode(block, 'blk', Blockly.JavaScript.ORDER_ATOMIC);
  var value_width = Blockly.JavaScript.valueToCode(block, 'width', Blockly.JavaScript.ORDER_ATOMIC);
  var value_depth = Blockly.JavaScript.valueToCode(block, 'depth', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'drone.prism(';
  if (value_blk !== ""){
	code +=	 value_blk;
  }		
  if (value_width !== ''){
	code +=	',' + value_width;
  }	
  if (value_depth !== ''){
	code +=	',' + value_depth;
  }	
  code += ');\n';
  return code;
};

Blockly.JavaScript['mc_prism0'] = function(block) {
  var value_blk = Blockly.JavaScript.valueToCode(block, 'blk', Blockly.JavaScript.ORDER_ATOMIC);
  var value_width = Blockly.JavaScript.valueToCode(block, 'width', Blockly.JavaScript.ORDER_ATOMIC);
  var value_depth = Blockly.JavaScript.valueToCode(block, 'depth', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'drone.prism0(';
  if (value_blk !== ""){
	code +=	 value_blk;
  }		
  if (value_width !== ''){
	code +=	',' + value_width;
  }	
  if (value_depth !== ''){
	code +=	',' + value_depth;
  }	
  code += ');\n';
  return code;
};


Blockly.JavaScript['mc_hemi'] = function(block) {
  var value_blk = Blockly.JavaScript.valueToCode(block, 'blk', Blockly.JavaScript.ORDER_ATOMIC);
  var value_radius = Blockly.JavaScript.valueToCode(block, 'radius', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_dir = block.getFieldValue('dir');
  // TODO: Assemble JavaScript into code variable.
  var code = 'drone.hemisphere(';
  if (value_blk !== ""){
	code +=	 value_blk;
  }		
  if (value_radius !== ''){
	code +=	',' + value_radius;
  }	
  if (dropdown_dir !== ''){
	code +=	",'" + dropdown_dir + "'";
  }
  code += ');\n';
  return code;
};

Blockly.JavaScript['mc_hemi0'] = function(block) {
  var value_blk = Blockly.JavaScript.valueToCode(block, 'blk', Blockly.JavaScript.ORDER_ATOMIC);
  var value_radius = Blockly.JavaScript.valueToCode(block, 'radius', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_dir = block.getFieldValue('dir');
  // TODO: Assemble JavaScript into code variable.
  var code = 'drone.hemisphere0(';
  if (value_blk !== ""){
	code +=	 value_blk;
  }		
  if (value_radius !== ''){
	code +=	',' + value_radius;
  }	
  if (dropdown_dir !== ''){
	code +=	",'" + dropdown_dir + "'";
  }
  code += ');\n';
  return code;
};


Blockly.JavaScript['mc_checkpoint'] = function(block) {
  var text_chkpt = block.getFieldValue('checkpoint');
  var code = 'drone.chkpt("' + text_chkpt + '");\n';
  return code;
};

Blockly.JavaScript['mc_moveto_chkpt'] = function(block) {
  var text_chkpt = block.getFieldValue('checkpoint');
  var code = 'drone.move("' + text_chkpt + '");\n';
  return code;
};

Blockly.JavaScript['mc_reg_event'] = function(block) {
  var dropdown_evt_type = block.getFieldValue('evt_type');
  var text_name = block.getFieldValue('NAME');
  var statements_evt_callb = Blockly.JavaScript.statementToCode(block, 'evt_callb');
  // TODO: Assemble JavaScript into code variable.
  var code = '';
  code += 'function '+ text_name +'(event) {\n';
  code += statements_evt_callb + '\n';
  code += '};\n';
  code += 'events.'+ dropdown_evt_type +'('+ text_name +');\n';
  return code;
};

Blockly.JavaScript['mc_event_info'] = function(block) {
  var dropdown_evt_info = block.getFieldValue('evt_info');
  // TODO: Assemble JavaScript into code variable.
  var code = dropdown_evt_info;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['mc_make_explosion'] = function(block) {
  var variable_plyr = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('plyr'), Blockly.Variables.NAME_TYPE);
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  var value_z = Blockly.JavaScript.valueToCode(block, 'z', Blockly.JavaScript.ORDER_ATOMIC);
  var value_power = Blockly.JavaScript.valueToCode(block, 'power', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_plyr;
  code += '.world.makeExplosion('; 
  code += variable_plyr + ',';
  code += value_x + ',';
  code += value_y + ',';
  code += value_z + ',';
  code += value_power;
  code += ',1);\n';
  return code;
};

Blockly.JavaScript['mc_set_timeout'] = function(block) {
  var text_callbk = block.getFieldValue('callbk');
  var value_milisecs = Blockly.JavaScript.valueToCode(block, 'milisecs', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'setTimeout('+ text_callbk +','+ value_milisecs*1000 +');\n';
  return code;
};

Blockly.JavaScript['mc_drone_cottage'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'drone.cottage();\n';
  return code;
};

Blockly.JavaScript['mc_drone_cottage_road'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'drone.cottage_road();\n';
  return code;
};


Blockly.JavaScript['mc_drone_castle'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'drone.castle();\n';
  return code;
};

Blockly.JavaScript['mc_drone_temple'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'drone.cottage_road();\n';
  return code;
};

Blockly.JavaScript['mc_drone_rainbow'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'drone.rainbow();\n';
  return code;
};


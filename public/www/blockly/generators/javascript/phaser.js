Blockly.JavaScript['var_addchild'] = function(block) {
  var variable_parent = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('parent'), Blockly.Variables.NAME_TYPE);
  //var value_child_name = Blockly.JavaScript.valueToCode(block, 'child_name', Blockly.JavaScript.ORDER_ATOMIC);
  var value_child_name = block.getFieldValue('child_name');
  var value_child_val = Blockly.JavaScript.valueToCode(block, 'child_val', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_parent + '.' + value_child_name +' = ' + value_child_val + ';\n';
  return code;
};

Blockly.JavaScript['var_getchild'] = function(block) {
  var variable_parent = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('parent'), Blockly.Variables.NAME_TYPE);
  //var value_child_name = Blockly.JavaScript.valueToCode(block, 'child_name', Blockly.JavaScript.ORDER_ATOMIC);
  var value_child_name = block.getFieldValue('child_name');
  //var value_child_val = Blockly.JavaScript.valueToCode(block, 'child_val', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_parent + '.' + value_child_name;
  //+' = ' + value_child_val;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['phaser_game'] = function(block) {
  //var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var value_width = Blockly.JavaScript.valueToCode(block, 'width', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height = Blockly.JavaScript.valueToCode(block, 'height', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  //var code = "var game = new Phaser.Game(" + value_width + "," + value_height + ", Phaser.AUTO, " + value_name + ", ";
  var code = "var game = new Phaser.Game(" + value_width + "," + value_height + ", Phaser.AUTO, 'phaser_blockly', ";
  code = code + '{preload: preload, create: create, update: update});\n';
  //code = code + "this.game.load.crossOrigin = 'anonymous';\n";	
  return code;
};

Blockly.JavaScript['phaser_loadatlas'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC);
  var value_img_src = Blockly.JavaScript.valueToCode(block, 'img_src', Blockly.JavaScript.ORDER_ATOMIC);
  var value_tex_src = Blockly.JavaScript.valueToCode(block, 'tex_src', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'game.load.atlas(' + value_name + ',' + value_img_src+ ',' + value_tex_src +');\n';
  return code;
};

Blockly.JavaScript['phaser_loadimage'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC);
  var value_img_src = Blockly.JavaScript.valueToCode(block, 'img_src', Blockly.JavaScript.ORDER_ATOMIC);
   // TODO: Assemble JavaScript into code variable.
  var code = 'game.load.image(' + value_name + ',' + value_img_src + ');\n';
  return code;
};

Blockly.JavaScript['phaser_loadaudio'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC);
  var value_aud_src = Blockly.JavaScript.valueToCode(block, 'aud_src', Blockly.JavaScript.ORDER_ATOMIC);
   // TODO: Assemble JavaScript into code variable.
  var code = 'game.load.audio(' + value_name + ',' + value_aud_src + ');\n';
  return code;
};


Blockly.JavaScript['phaser_startphysics'] = function(block) {
  var dropdown_phys_type = block.getFieldValue('phys_type');
  // TODO: Assemble JavaScript into code variable.
  var code = 'game.physics.startSystem('+ dropdown_phys_type +');\n';
  return code;
};

Blockly.JavaScript['phaser_creategrp'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'game.add.group()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];  
};

Blockly.JavaScript['phaser_create_physics_grp'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'game.add.physicsGroup()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];  
};

Blockly.JavaScript['phaser_addtogrp'] = function(block) {
  var variable_gameobj = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('gameObj'), Blockly.Variables.NAME_TYPE);
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  var value_src = Blockly.JavaScript.valueToCode(block, 'src', Blockly.JavaScript.ORDER_ATOMIC);
  var value_id = Blockly.JavaScript.valueToCode(block, 'id', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_gameobj + '.create(' +value_x + ',' + value_y + ',' + value_id;
  if (value_src != '') {
      code += ','+ value_src;
  }
  code += ');\n';
  //return [code, Blockly.JavaScript.ORDER_NONE];
  return code;
};

Blockly.JavaScript['phaser_add_tilesprite'] = function(block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  var value_width = Blockly.JavaScript.valueToCode(block, 'width', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height = Blockly.JavaScript.valueToCode(block, 'height', Blockly.JavaScript.ORDER_ATOMIC);
  var value_src = Blockly.JavaScript.valueToCode(block, 'src', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'game.add.tileSprite(' + value_x + ',' + value_y + ',' + value_width + ',' + value_height + ',' + value_src + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['phaser_chkcoll'] = function(block) {
  /*var value_up = Blockly.JavaScript.valueToCode(block, 'up', Blockly.JavaScript.ORDER_ATOMIC);
  var value_down = Blockly.JavaScript.valueToCode(block, 'down', Blockly.JavaScript.ORDER_ATOMIC);
  var value_left = Blockly.JavaScript.valueToCode(block, 'left', Blockly.JavaScript.ORDER_ATOMIC);
  var value_right = Blockly.JavaScript.valueToCode(block, 'right', Blockly.JavaScript.ORDER_ATOMIC);*/

  var dropdown_prop = block.getFieldValue('prop');
  var value_prop_val = Blockly.JavaScript.valueToCode(block, 'prop_val', Blockly.JavaScript.ORDER_ATOMIC);

// TODO: Assemble JavaScript into code variable.
  var code = 'game.physics.arcade.checkCollision.' + dropdown_prop + "=" + value_prop_val + ";";

  /*if (value_up != ''){
  	code = code + 'game.physics.arcade.checkCollision.up = ' + value_up + ';\n';
  }
  if (value_down != ''){
  	code = code + 'game.physics.arcade.checkCollision.down = ' + value_down + ';\n';
  }
  if (value_left != ''){
  	code = code + 'game.physics.arcade.checkCollision.left = ' + value_left + ';\n';
  }
  if (value_right != ''){
  	code = code + 'game.physics.arcade.checkCollision.right = ' + value_right + ';\n';
  }*/

  return code;
};

Blockly.JavaScript['phaser_addsprite'] = function(block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  var value_id = Blockly.JavaScript.valueToCode(block, 'id', Blockly.JavaScript.ORDER_ATOMIC);
  var value_image_src = Blockly.JavaScript.valueToCode(block, 'image_src', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'game.add.sprite(' + value_x + ',' + value_y + ',' + value_id;
  if (value_image_src != '') {    
    code += ',' + value_image_src
  }
  code += ')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['phaser_enablephysics'] = function(block) {
  var variable_gameobj = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('gameObj'), Blockly.Variables.NAME_TYPE);
  var dropdown_phys_type = block.getFieldValue('phys_type');
  // TODO: Assemble JavaScript into code variable.
  var code = 'game.physics.enable(' + variable_gameobj + ',Phaser.Physics.' + dropdown_phys_type + ');\n';
  return code;
};

Blockly.JavaScript['phaser_set_obj_body_props'] = function(block) {
  var variable_game_obj = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('game_obj'), Blockly.Variables.NAME_TYPE);
  var dropdown_prop = block.getFieldValue('prop');
  var value_prop_val = Blockly.JavaScript.valueToCode(block, 'prop_val', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var obMod = '=' + value_prop_val + ';\n';
  if (dropdown_prop == 'bounce' || dropdown_prop == 'velocity') {
      obMod = '.set('+value_prop_val+');\n';
  }
  var code = variable_game_obj + '.body.' + dropdown_prop + obMod;
  return code;
};

Blockly.JavaScript['phaser_get_obj_body_props'] = function(block) {
  var dropdown_prop = block.getFieldValue('prop');
  var variable_game_obj = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('game_obj'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_game_obj + '.body.' + dropdown_prop;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

/*Blockly.JavaScript['phaser_set_game_obj_props'] = function(block) {
  var variable_game_obj = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('game_obj'), Blockly.Variables.NAME_TYPE);
  var dropdown_prop = block.getFieldValue('prop');
  var value_prop_val = Blockly.JavaScript.valueToCode(block, 'prop_val', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var obMod = '=' + value_prop_val;
  if (dropdown_prop == 'anchor') {
      obMod = '.set('+value_prop_val+')';
  }
  var code = variable_game_obj + '.' + dropdown_prop + obMod;
  return [code, Blockly.JavaScript.ORDER_NONE];
  //return code;
};*/

Blockly.JavaScript['phaser_set_game_obj_props'] = function(block) {
  var variable_game_obj = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('game_obj'), Blockly.Variables.NAME_TYPE);
  var value_prop_val = Blockly.JavaScript.valueToCode(block, 'prop_val', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_prop = block.getFieldValue('prop');
  // TODO: Assemble JavaScript into code variable.
  var obMod = '=' + value_prop_val + ';\n';
  if (dropdown_prop == 'anchor') {
      obMod = '.set('+value_prop_val+');\n';
  }
  var code = variable_game_obj + '.' + dropdown_prop + obMod;
  return code;
};

Blockly.JavaScript['phaser_set_phys_sys_props'] = function(block) {
  var value_prop_val = Blockly.JavaScript.valueToCode(block, 'prop_val', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_prop = block.getFieldValue('prop');
  var dropdown_phys_type = block.getFieldValue('phys_type');
  // TODO: Assemble JavaScript into code variable.
  var obMod = '=' + value_prop_val;
  
  var code = 'game.physics.' + dropdown_phys_type.toString().toLowerCase() + '.' + dropdown_prop + obMod+ ';\n';
  return code;
};


Blockly.JavaScript['phaser_get_game_obj_props'] = function(block) {
  var variable_game_obj = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('game_obj'), Blockly.Variables.NAME_TYPE);
  var dropdown_prop = block.getFieldValue('prop');
  //var value_prop_val = Blockly.JavaScript.valueToCode(block, 'prop_val', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_game_obj + '.' + dropdown_prop;
  return [code, Blockly.JavaScript.ORDER_NONE];
  //return code;
};

Blockly.JavaScript['phaser_physics'] = function(block) {
  var dropdown_prop = block.getFieldValue('prop');
  // TODO: Assemble JavaScript into code variable.
  var code = dropdown_prop;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

/*Blockly.JavaScript['phaser_enable_obj_physics'] = function(block) {
  var dropdown_phys = block.getFieldValue('phys');
  var variable_game_obj = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('game_obj'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = 'game.physics.enable(' + variable_game_obj + ',Phaser.Physics.' + dropdown_phys.toUpperCase() + ');\n';
  return code;
};*/

Blockly.JavaScript['phaser_obj_collide'] = function(block) {
  var dropdown_phys = block.getFieldValue('phys');
  var variable_game_obj1 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('game_obj1'), Blockly.Variables.NAME_TYPE);
  var variable_game_obj2 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('game_obj2'), Blockly.Variables.NAME_TYPE);
  var text_callback = block.getFieldValue('callback');
  // TODO: Assemble JavaScript into code variable.
  var code = 'game.physics.' + dropdown_phys + '.collide(' + variable_game_obj1 + ',' + variable_game_obj2;
  if (text_callback != '') {
  	code +=  ',' + text_callback + ',' + 'null,this';
  }
  code += ');\n';
  return code;
};



Blockly.JavaScript['phaser_world_center_x'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'game.world.centerX';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['phaser_world_center_y'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'game.world.centerY';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

/*
Blockly.JavaScript['phaser_world_width'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'game.world.width';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['phaser_world_height'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'game.world.height';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
*/


Blockly.JavaScript['phaser_add_text'] = function(block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  var text_font_size = block.getFieldValue('font_size');
  var text_font_face = block.getFieldValue('font_face');
  var colour_fill_color = block.getFieldValue('fill_color');
  var dropdown_text_align = block.getFieldValue('text_align');
  var text_text_to_add = block.getFieldValue('text_to_add');
  // TODO: Assemble JavaScript into code variable.
  var code = 'game.add.text(';
  code = code + value_x + ', ';
  code = code + value_y + ', ';
  code = code + '\"' + text_text_to_add + '\", ';
  code = code + '{';
  code = code + 'font: \"' + text_font_size + "px " + text_font_face + '\", ';    
  code = code + 'fill: \"' + colour_fill_color + '\", ';
  code = code + 'align: \"' + dropdown_text_align + '\"';
  code = code + '})'
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['phaser_kill_obj'] = function(block) {
  var variable_obj_to_kill = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('obj_to_kill'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_obj_to_kill + '.kill();\n';
  return code;
};

Blockly.JavaScript['phaser_call_all_obj'] = function(block) {
  var variable_obj_to_kill = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('obj_to_kill'), Blockly.Variables.NAME_TYPE);
  var text_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = variable_obj_to_kill + ".callAll('" + text_name  + "');\n";
  return code;
};

Blockly.JavaScript['phaser_set_all_obj'] = function(block) {
  var variable_obj_to_set = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('grp_to_setall'), Blockly.Variables.NAME_TYPE);
  var text_name = block.getFieldValue('NAME');
  var text_value = block.getFieldValue('VALUE');
  // TODO: Assemble JavaScript into code variable.
  var code = variable_obj_to_set + ".setAll('" + text_name  + "'," + text_value + ");\n";
  return code;
};


Blockly.JavaScript['functions_new_func'] = function(block) {
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = 'function() {\n';
  code += statements_name;
  code += '}\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['phaser_load_spritesheet'] = function(block) {
  var value_id = Blockly.JavaScript.valueToCode(block, 'id', Blockly.JavaScript.ORDER_ATOMIC);
  var value_img_src = Blockly.JavaScript.valueToCode(block, 'img_src', Blockly.JavaScript.ORDER_ATOMIC);
  var value_width = Blockly.JavaScript.valueToCode(block, 'width', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height = Blockly.JavaScript.valueToCode(block, 'height', Blockly.JavaScript.ORDER_ATOMIC);
  var value_num_frames = Blockly.JavaScript.valueToCode(block, 'num_frames', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'this.game.load.spritesheet('; 
  code += value_id + ',';
  code += value_img_src + ',';
  code += value_width + ',';
  code += value_height + ',';
  code += value_num_frames;
  code += ');\n';
  return code;
};

Blockly.JavaScript['phaser_load_tilemap'] = function(block) {
  var value_id = Blockly.JavaScript.valueToCode(block, 'id', Blockly.JavaScript.ORDER_ATOMIC);
  var value_mapfile = Blockly.JavaScript.valueToCode(block, 'mapfile', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = 'game.load.tilemap(';
  code += value_id + ',';
  code += value_mapfile + ',';
  code += 'null ,';
  code += dropdown_name;
  code += ');\n';
  return code;
};

Blockly.JavaScript['phaser_add_tilemap'] = function(block) {
  var value_id = Blockly.JavaScript.valueToCode(block, 'id', Blockly.JavaScript.ORDER_ATOMIC);
  var value_tilewidth = Blockly.JavaScript.valueToCode(block, 'tile_width', Blockly.JavaScript.ORDER_ATOMIC);
  var value_tileheight = Blockly.JavaScript.valueToCode(block, 'tile_height', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = "game.add.tilemap(" +value_id;
  if (value_tilewidth != "" ) {
    code += ',' + value_tilewidth;
  }
  if (value_tileheight != "" ) {
    code += ',' + value_tileheight;
  }

  code += ")";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};


Blockly.JavaScript['phaser_create_maplayer'] = function(block) {
  var variable_game_obj = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('game_obj'), Blockly.Variables.NAME_TYPE);
  var value_id = Blockly.JavaScript.valueToCode(block, 'id', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_game_obj + ".createLayer("+value_id +")";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['phaser_resize_world_layer'] = function(block) {
  var variable_game_obj = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('game_obj'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_game_obj + ".resizeWorld();\n";
  return code;
};

Blockly.JavaScript['phaser_add_map_tileset'] = function(block) {
  var value_id = Blockly.JavaScript.valueToCode(block, 'id', Blockly.JavaScript.ORDER_ATOMIC);
  var value_img_id = Blockly.JavaScript.valueToCode(block, 'img_id', Blockly.JavaScript.ORDER_ATOMIC);
  var variable_game_obj = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('game_obj'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_game_obj + ".addTilesetImage("+value_id + "," + value_img_id +");\n";
  return code;
};

Blockly.JavaScript['phaser_add_animation'] = function(block) {
  var value_frames = Blockly.JavaScript.valueToCode(block, 'frames', Blockly.JavaScript.ORDER_ATOMIC);
  var variable_game_obj = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('game_obj'), Blockly.Variables.NAME_TYPE);
  var text_anim_id = block.getFieldValue('anim_id');
  // TODO: Assemble JavaScript into code variable.
  var code = variable_game_obj + '.animations.add(';
  code += "'" + text_anim_id + "'";
  if (value_frames != '') {
    code +=  ','  + value_frames; 
  }
  code += ');\n';
  return code;
};

Blockly.JavaScript['phaser_add_animation_range'] = function(block) {
  var value_frames = new Array();
  var value_framestart = Blockly.JavaScript.valueToCode(block, 'framestart', Blockly.JavaScript.ORDER_ATOMIC);
  var value_frameend = Blockly.JavaScript.valueToCode(block, 'frameend', Blockly.JavaScript.ORDER_ATOMIC);
  var variable_game_obj = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('game_obj'), Blockly.Variables.NAME_TYPE);
  var text_anim_id = block.getFieldValue('anim_id');
  // TODO: Assemble JavaScript into code variable.

  var code = variable_game_obj + '.animations.add(';
  code += "'" + text_anim_id + "'";
  for (var i = parseInt(value_framestart); i <= parseInt(value_frameend); i++) {
    value_frames.push(i);    
  }
  code +=  ',['  + value_frames + ']';  
  code += ');\n';
  return code;
};

Blockly.JavaScript['phaser_add_animation_single'] = function(block) {
  var value_frames = Blockly.JavaScript.valueToCode(block, 'frames', Blockly.JavaScript.ORDER_ATOMIC);
  var variable_game_obj = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('game_obj'), Blockly.Variables.NAME_TYPE);
  var text_anim_id = block.getFieldValue('anim_id');
  // TODO: Assemble JavaScript into code variable.
  var code = variable_game_obj + '.animations.add(';
  code += "'" + text_anim_id + "'";
  if (value_frames != '') {
    code +=  ',['  + value_frames + ']'; 
  }
  code += ');\n';
  return code;
};

Blockly.JavaScript['phaser_play_animation'] = function(block) {
  var variable_game_obj = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('game_obj'), Blockly.Variables.NAME_TYPE);
  var value_framerate = Blockly.JavaScript.valueToCode(block, 'framerate', Blockly.JavaScript.ORDER_ATOMIC);
  var value_loop = Blockly.JavaScript.valueToCode(block, 'loop', Blockly.JavaScript.ORDER_ATOMIC);
  var text_anim_id = block.getFieldValue('anim_id');
  // TODO: Assemble JavaScript into code variable.
  var code = variable_game_obj + '.animations.play(';
  code += "'" + text_anim_id + "',";    
  code += value_framerate + ",";
  code += value_loop;
  code += ');\n';
  return code;
};

Blockly.JavaScript['phaser_stop_animation'] = function(block) {
  var variable_game_obj = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('game_obj'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_game_obj + '.animations.stop();\n';
  return code;
};


Blockly.JavaScript['phaser_set_bg_color'] = function(block) {
  var colour_bg_color = block.getFieldValue('bg_color');
  // TODO: Assemble JavaScript into code variable.
  var code = "game.stage.backgroundColor='" + colour_bg_color + "';\n";
  // TODO: Change ORDER_NONE to the correct strength.
  //return [code, Blockly.JavaScript.ORDER_NONE];
  return code;
};

Blockly.JavaScript['phaser_add_cursor_keys'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  //var code = 'cursors = game.input.keyboard.createCursorKeys()';
    var code = 'game.input.keyboard.createCursorKeys()';
  // TODO: Change ORDER_NONE to the correct strength.
  //return code;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['phaser_add_a_key'] = function(block) {
  var dropdown_key = block.getFieldValue('key');
  // TODO: Assemble JavaScript into code variable.
  var code = 'game.input.keyboard.addKey(' + dropdown_key + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['phaser_get_curs_key_state'] = function(block) {
  var dropdown_c_key = block.getFieldValue('c_key');
  var dropdown_state = block.getFieldValue('state');
  // TODO: Assemble JavaScript into code variable.
  var code = 'cursors.'+dropdown_c_key+'.'+dropdown_state;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['phaser_camera_follow'] = function(block) {
  var variable_game_obj = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('game_obj'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = 'game.camera.follow('+variable_game_obj+');\n';
  return code;
};

Blockly.JavaScript['phaser_stop_camera_follow'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'game.camera.follow();\n';
  return code;
};


Blockly.JavaScript['phaser_add_audio'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'game.add.audio(' + value_name + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['phaser_input_add'] = function(block) {
  //var variable_game_obj = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('game_obj'), Blockly.Variables.NAME_TYPE);
  var dropdown_evt = block.getFieldValue('evt');
  var text_callback = block.getFieldValue('callback');
  // TODO: Assemble JavaScript into code variable.
  //var code = 'game.input.' +dropdown_evt+ '.add('+text_callback+',this);\n';
  //var code = variable_game_obj + '.input.' +dropdown_evt+ '.add('+text_callback+',this);\n';
  var code = 'this.input.' +dropdown_evt+ '.add('+text_callback+',this);\n';
  return code;
};

Blockly.JavaScript['phaser_get_world_property'] = function(block) {
  var dropdown_prop = block.getFieldValue('prop');
  // TODO: Assemble JavaScript into code variable.
  var code = 'game.world.' + dropdown_prop;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['phaser_get_game_property'] = function(block) {
  var dropdown_prop = block.getFieldValue('prop');
  // TODO: Assemble JavaScript into code variable.
  var code = 'game.' + dropdown_prop;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};


Blockly.JavaScript['phaser_time_now'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'game.time.now';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['phaser_group_removeall'] = function(block) {
  var variable_grp_obj = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('grp_obj'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_grp_obj + '.removeAll();\n';
  return code;
};

/*
Blockly.JavaScript['phaser_group_getfirstdead'] = function(block) {
  var variable_grp_obj = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('grp_obj'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_grp_obj + '.getFirstDead();\n';
  return code;
};
*/

Blockly.JavaScript['phaser_group_getfirstdead'] = function(block) {
  var variable_grp = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('grp'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_grp + '.getFirstDead()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};


Blockly.JavaScript['phaser_timer_start'] = function(block) {
  var variable_tim_obj = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('tim_obj'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_tim_obj +'.timer.start();\n';
  return code;
};

Blockly.JavaScript['phaser_timer_stop'] = function(block) {
  var variable_tim_obj = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('tim_obj'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_tim_obj +'.timer.stop();\n';
  return code;
};

Blockly.JavaScript['phaser_reset_obj_pos'] = function(block) {
  var value_x_pos = Blockly.JavaScript.valueToCode(block, 'x_pos', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y_pos = Blockly.JavaScript.valueToCode(block, 'y_pos', Blockly.JavaScript.ORDER_ATOMIC);
  var variable_game_obj = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('game_obj'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_game_obj + '.reset(' + value_x_pos +',' + value_y_pos + ');\n';
  return code;
};

Blockly.JavaScript['phaser_play_audio'] = function(block) {
  var variable_aud_obj = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('aud_obj'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_aud_obj + '.play();';
  return code;
};

Blockly.JavaScript['phaser_stop_audio'] = function(block) {
  var variable_aud_obj = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('aud_obj'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_aud_obj + '.stop();';
  return code;
};

Blockly.JavaScript['phaser_autoscroll_tile_sprite'] = function(block) {
  var value_x_pos = Blockly.JavaScript.valueToCode(block, 'x_pos', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y_pos = Blockly.JavaScript.valueToCode(block, 'y_pos', Blockly.JavaScript.ORDER_ATOMIC);
  var variable_game_obj = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('game_obj'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_game_obj + '.autoScroll(' + value_x_pos +',' + value_y_pos + ');\n';
  return code;
};

Blockly.JavaScript['phaser_time_units'] = function(block) {
  var dropdown_time_unit = block.getFieldValue('time_unit');
  // TODO: Assemble JavaScript into code variable.
  var code = 'Phaser.Timer.' + dropdown_time_unit ;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

/*Blockly.JavaScript['phaser_loop_timer_event'] = function(block) {
  var value_delay = Blockly.JavaScript.valueToCode(block, 'delay', Blockly.JavaScript.ORDER_ATOMIC);
  var value_callback = Blockly.JavaScript.valueToCode(block, 'callback', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'game.time.events.loop('+ value_delay + ',' + value_callback +',this);';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};*/

Blockly.JavaScript['phaser_loop_timer_event'] = function(block) {
  var value_delay = Blockly.JavaScript.valueToCode(block, 'delay', Blockly.JavaScript.ORDER_ATOMIC);
  var text_callback = block.getFieldValue('callback');
  // TODO: Assemble JavaScript into code variable.
  var code = 'game.time.events.loop('+ value_delay + ',' + text_callback +',this)';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['phaser_random_int_range'] = function(block) {
  var value_int1 = Blockly.JavaScript.valueToCode(block, 'int1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_int2 = Blockly.JavaScript.valueToCode(block, 'int2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'game.rnd.integerInRange('+value_int1+','+value_int2+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};


Blockly.JavaScript['phaser_set_text'] = function(block) {
  var value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
  var variable_game_obj = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('game_obj'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_game_obj + '.setText(' +value_text + ');\n';
  return code;
};

Blockly.JavaScript['phaser_set_map_collision'] = function(block) {
  var value_tile_id = Blockly.JavaScript.valueToCode(block, 'tile_id', Blockly.JavaScript.ORDER_ATOMIC);
  var variable_game_obj = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('game_obj'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_game_obj + '.setCollision('+value_tile_id+');\n';
  return code;
};

Blockly.JavaScript['phaser_set_map_collision_between'] = function(block) {
  var value_tile_id1 = Blockly.JavaScript.valueToCode(block, 'tile_id1', Blockly.JavaScript.ORDER_ATOMIC);
  var variable_game_obj = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('game_obj'), Blockly.Variables.NAME_TYPE);
  var value_tile_id2 = Blockly.JavaScript.valueToCode(block, 'tile_id2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_game_obj + '.setCollisionBetween('+value_tile_id1 + ',' + value_tile_id2 +');\n';
  return code;
};

Blockly.JavaScript['phaser_move_obj_to'] = function(block) {
  var dropdown_phys = block.getFieldValue('phys');    
  var variable_game_obj1 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('game_obj1'), Blockly.Variables.NAME_TYPE);
  var variable_game_obj2 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('game_obj2'), Blockly.Variables.NAME_TYPE);
  var value_move_speed = Blockly.JavaScript.valueToCode(block, 'move_speed', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'game.physics.' + dropdown_phys + '.moveToObject('+variable_game_obj1 + ',' + variable_game_obj2 + ',' + value_move_speed +');\n';
  return code;
};

Blockly.JavaScript['phaser_distance_between'] = function(block) {
  var dropdown_phys = block.getFieldValue('phys');    
  var variable_game_obj1 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('game_obj1'), Blockly.Variables.NAME_TYPE);
  var variable_game_obj2 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('game_obj2'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = 'game.physics.' + dropdown_phys + '.distanceBetween('+variable_game_obj1 + ',' + variable_game_obj2 +')';
  //return code;
  return [code, Blockly.JavaScript.ORDER_NONE];
};


Blockly.JavaScript['phaser_direction'] = function(block) {
  var dropdown_dir = block.getFieldValue('dir');
  // TODO: Assemble JavaScript into code variable.
  var code = 'Phaser.' + dropdown_dir;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['phaser_new_point'] = function(block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'new Phaser.Point(';
  if (value_x != '' && value_y != '') {
      code += value_x + ',' + value_y; 
  }
  code += ')'
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['jsobj_create_with'] = function(block) {
  // Create a list with any number of elements of any type.
  var code = new Array(block.itemCount_);
  for (var n = 0; n < block.itemCount_; n++) {
    code[n] = Blockly.JavaScript.valueToCode(block, 'ADD' + n,
        Blockly.JavaScript.ORDER_COMMA) || 'null';
  }
  code = '{' + code.join(', ') + '}';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['misc_key_val_pair'] = function(block) {
  var value_key = Blockly.JavaScript.valueToCode(block, 'key', Blockly.JavaScript.ORDER_ATOMIC);
  var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_key + ':' + value_value;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['phaser_on_click_touch'] = function(block) {
  var text_callback = block.getFieldValue('callback');
  // TODO: Assemble JavaScript into code variable.
  var code = 'game.input.onDown.addOnce(' + text_callback + ', this);\n';
  return code;
};

Blockly.JavaScript['phaser_create_tween'] = function(block) {
  var variable_game_obj = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('game_obj'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = 'game.add.tween(' + variable_game_obj + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['phaser_start_tween'] = function(block) {
  var variable_game_obj = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('game_obj'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_game_obj + '.start();\n';
  // TODO: Change ORDER_NONE to the correct strength.
  //return [code, Blockly.JavaScript.ORDER_NONE];
  return code;
};


Blockly.JavaScript['phaser_tween_to_settings'] = function(block) {
  var variable_game_obj = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('game_obj'), Blockly.Variables.NAME_TYPE);
  var value_props = Blockly.JavaScript.valueToCode(block, 'props', Blockly.JavaScript.ORDER_ATOMIC);
  var value_duration = Blockly.JavaScript.valueToCode(block, 'duration', Blockly.JavaScript.ORDER_ATOMIC);
  var value_ease = Blockly.JavaScript.valueToCode(block, 'ease', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_ease = block.getFieldValue('ease');
  var value_autostart = Blockly.JavaScript.valueToCode(block, 'autostart', Blockly.JavaScript.ORDER_ATOMIC);
  var value_delay = Blockly.JavaScript.valueToCode(block, 'delay', Blockly.JavaScript.ORDER_ATOMIC);
  var value_repeat = Blockly.JavaScript.valueToCode(block, 'repeat', Blockly.JavaScript.ORDER_ATOMIC);
  var value_yoyo = Blockly.JavaScript.valueToCode(block, 'yoyo', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_game_obj + '.to(';
  code += value_props + ',';
  code += value_duration + ',';
  code += '"' + dropdown_ease + '",';
  code += value_autostart + ',';
  code += value_delay + ',';
  code += value_repeat + ',';
  code += value_yoyo;    
  code += ');\n';
  return code;
};

Blockly.JavaScript['phaser_tileindex_callback'] = function(block) {
  var text_callback = block.getFieldValue('callback');
  var variable_game_obj = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('game_obj'), Blockly.Variables.NAME_TYPE);
  var value_map_tile = Blockly.JavaScript.valueToCode(block, 'map_tile', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_game_obj + '.setTileIndexCallback('+ value_map_tile + ',' + text_callback + ',this);\n';
  return code;
};

Blockly.JavaScript['phaser_set_text_shadow'] = function(block) {
  var variable_game_obj = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('game_obj'), Blockly.Variables.NAME_TYPE);
  var value_x_dist = Blockly.JavaScript.valueToCode(block, 'x_dist', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y_dist = Blockly.JavaScript.valueToCode(block, 'y_dist', Blockly.JavaScript.ORDER_ATOMIC);
  var colour_color = block.getFieldValue('color');
  var value_opac = Blockly.JavaScript.valueToCode(block, 'opac', Blockly.JavaScript.ORDER_ATOMIC);
  var value_blur = Blockly.JavaScript.valueToCode(block, 'blur', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var rgba_color = 'rgba(';
  rgba_color += parseInt(colour_color.substr(1,2),16).toString() + ','; 
  rgba_color += parseInt(colour_color.substr(3,2),16).toString() + ',';
  rgba_color += parseInt(colour_color.substr(5,2),16).toString() + ',';
  rgba_color += value_opac    
  rgba_color += ')';
  var code = variable_game_obj + ".setShadow("+ value_x_dist +","+ value_y_dist +",'" + rgba_color + "'," + value_blur +");";
  return code;
};

Blockly.JavaScript['phaser_move_camera'] = function(block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'game.camera.x =' + value_x + ';\n';
  code += 'game.camera.y =' + value_y + ';\n';
  return code;
};

Blockly.JavaScript['phaser_set_world_bounds'] = function(block) {
  var value_x_pos = Blockly.JavaScript.valueToCode(block, 'x_pos', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y_pos = Blockly.JavaScript.valueToCode(block, 'y_pos', Blockly.JavaScript.ORDER_ATOMIC);
  var value_width = Blockly.JavaScript.valueToCode(block, 'width', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height = Blockly.JavaScript.valueToCode(block, 'height', Blockly.JavaScript.ORDER_ATOMIC);

  // TODO: Assemble JavaScript into code variable.
  var code = 'game.world.setBounds(' + value_x_pos +',' + value_y_pos + ',' + value_width +',' + value_height + ');\n';
  return code;
};

Blockly.JavaScript['phaser_crossorigin'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "this.game.load.crossOrigin = 'anonymous';\n";
  return code;
};

Blockly.JavaScript['phaser_foreach_grp_alive'] = function(block) {
  var variable_group = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('group'), Blockly.Variables.NAME_TYPE);
  var text_itm = block.getFieldValue('itm');
  var text_callback = block.getFieldValue('callback');
  // TODO: Assemble JavaScript into code variable.
  var code = variable_group+'.forEachAlive(function('+text_itm +'){'+text_callback+'('  + text_itm +');});\n';
  return code;
};

Blockly.JavaScript['phaser_add_to_grp_ret'] = function(block) {
  var variable_group = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('group'), Blockly.Variables.NAME_TYPE);
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  var value_id = Blockly.JavaScript.valueToCode(block, 'id', Blockly.JavaScript.ORDER_ATOMIC);
  var value_src = Blockly.JavaScript.valueToCode(block, 'src', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_group + '.create(' + value_x + ',' + value_y + ',' + value_id;
  if (value_src != '') {
      code += ','+ value_src;
  }
  code += ')';
  	
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['phaser_get_image_prop'] = function(block) {
  var text_img_id = block.getFieldValue('img_id');
  var dropdown_prop = block.getFieldValue('prop');
  // TODO: Assemble JavaScript into code variable.
  var code = "game.cache.getImage('" + text_img_id + "')." + dropdown_prop;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['phaser_create_mult_grp_item'] = function(block) {
  var value_num_items = Blockly.JavaScript.valueToCode(block, 'num_items', Blockly.JavaScript.ORDER_ATOMIC);
  var variable_grp = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('grp'), Blockly.Variables.NAME_TYPE);
  var text_img_id = block.getFieldValue('img_id');
  // TODO: Assemble JavaScript into code variable.
  var code = variable_grp + ".createMultiple(" + value_num_items + ",'" + text_img_id + "');\n";
  return code;
};

Blockly.JavaScript['new_line_char'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code =  'String.fromCharCode(10)';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
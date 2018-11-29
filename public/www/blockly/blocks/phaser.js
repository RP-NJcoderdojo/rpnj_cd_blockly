Blockly.Blocks['var_addchild'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField("Set Child Value for parent:");
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("item"), "parent");
    this.appendDummyInput()
        .appendField(".");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldTextInput("child"), "child_name");  
    //this.appendValueInput("child_name")
    //    .setCheck("String");
    this.appendDummyInput()
        .appendField("to");
    this.appendValueInput("child_val");
        //.setCheck("null");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['var_getchild'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField("Get Child Value of parent");
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("item"), "parent");
    this.appendDummyInput()
        .appendField(".");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldTextInput("child"), "child_name");  
    this.setInputsInline(true);
    this.setOutput(true);  
    this.setPreviousStatement(false);
    this.setNextStatement(false);
    this.setTooltip('');
  }
};



Blockly.Blocks['phaser_game'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField("Phaser Game");
    //this.appendValueInput("NAME")
    //    .setAlign(Blockly.ALIGN_RIGHT)
    //    .appendField("Name");
    this.appendValueInput("width")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Width");
    this.appendValueInput("height")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Height");
    this.setInputsInline(true);
    //this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['phaser_loadatlas'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField("Load Texture Atlas");
    this.appendValueInput("name")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Name");
    this.appendValueInput("img_src")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Image Source");
    this.appendValueInput("tex_src")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Texture Source");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['phaser_loadimage'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField("Load Image");
    this.appendValueInput("name")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("id");
    this.appendValueInput("img_src")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Image Source");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['phaser_loadaudio'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField("Load Audio");
    this.appendValueInput("name")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("id");
    this.appendValueInput("aud_src")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Sound Source");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['phaser_startphysics'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField("Start Physics");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["Arcade", "Phaser.Physics.ARCADE"], ["P2", "Phaser.Physics.P2JS"]]), "phys_type");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['phaser_creategrp'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField("Create Group");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['phaser_create_physics_grp'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField("Create Physics Group");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip('');
  }
};


Blockly.Blocks['phaser_addtogrp'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField("Add to Group");
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("item"), "gameObj");
    this.appendValueInput("x")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("x");
    this.appendValueInput("y")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("y");
    this.appendValueInput("id")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("id");
    this.appendValueInput("src")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("src");
    this.setOutput(false);
    this.setPreviousStatement(true);
    this.setInputsInline(true);  
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['phaser_add_tilesprite'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField("Tilesprite");
    this.appendValueInput("x")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("x");
    this.appendValueInput("y")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("y");
    this.appendValueInput("width")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("width");
    this.appendValueInput("height")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("height");
    this.appendValueInput("src")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("src");
    this.setInputsInline(false);
    this.setOutput(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['phaser_chkcoll'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField("Check Bounds Collision");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("for Arcade Physics");

    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldDropdown([["Up", "up"], ["Down", "down"], ["Left", "left"], ["Right", "right"]]), "prop");

        this.appendValueInput("prop_val")
        .setCheck("Boolean")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("value");
  
    /*this.appendValueInput("up")
        .setCheck("Boolean")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("up");
    this.appendValueInput("down")
        .setCheck("Boolean")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("down");
    this.appendValueInput("left")
        .setCheck("Boolean")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("left");
    this.appendValueInput("right")
        .setCheck("Boolean")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("right");*/

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['phaser_addsprite'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField("Add Game Sprite");
    this.appendValueInput("x")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("x");
    this.appendValueInput("y")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("y");
    this.appendValueInput("id")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("id");
    this.appendValueInput("image_src")
        /*.setCheck("String")*/
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Texture Image / Frame");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['phaser_enablephysics'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField("Enable Object Physics");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldVariable("item"), "gameObj")
        .appendField(new Blockly.FieldDropdown([["Arcade", "ARCADE"], ["P2", "P2JS"]]), "phys_type");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};


Blockly.Blocks['phaser_set_obj_body_props'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField("Set Body Property");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldDropdown([["Allow Gravity", "allowGravity"],["Velocity x", "velocity.x"], ["Velocity y", "velocity.y"], ["Gravity x", "gravity.x"], ["Gravity y", "gravity.y"], ["Bounce", "bounce"], ["Immovable", "immovable"],["Linear Damping", "linearDamping"], ["Facing", "facing"], ["X", "x"], ["Y", "y"], ["Width", "width"], ["Height", "height"], ["Offset X", "offset.x"], ["Offset Y", "offset.y"], ["Velocity", "velocity"], ["Collide World", "collideWorldBounds"]]), "prop");
    this.appendDummyInput()
        .appendField("on");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldVariable("item"), "game_obj");
    this.appendValueInput("prop_val")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("value");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};


Blockly.Blocks['phaser_get_obj_body_props'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField("Get Body Property")
        .appendField(new Blockly.FieldDropdown([["Velocity", "velocity"], ["Velocity X", "velocity.x"], ["Velocity Y", "velocity.y"], ["Position x", "position.x"], ["Position y", "position.y"], ["Height", "height"], ["Width", "width"], ["Top", "top"], ["Bottom", "bottom"], ["Left", "left"], ["Right", "right"],["Facing", "facing"],["Touching Down", "touching.down"],["Was Touching Down", "wasTouching.down"],["On Floor", "onFloor()"]]), "prop");
    this.appendDummyInput()
        .appendField("From")
        .appendField(new Blockly.FieldVariable("item"), "game_obj");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['phaser_set_phys_sys_props'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField("Set Physics System Property");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldDropdown([["Gravity y", "gravity.y"]]), "prop");
    this.appendDummyInput()
        .appendField("for");

    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldDropdown([["Arcade", "arcade"], ["P2", "p2"]]), "phys_type");
    this.appendDummyInput()
        .appendField("to");

    this.appendValueInput("prop_val")
        .setAlign(Blockly.ALIGN_RIGHT)
        .setCheck("Number")
        .appendField("value");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};



/*Blockly.Blocks['phaser_set_game_obj_props'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField("Set Game Object Property");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldVariable("item"), "game_obj");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldDropdown([["Set Anchor", "anchor"], ["Visible", "visible"], ["Enable Body", "enableBody"], ["Physics Body Type", "physicsBodyType"], ["X", "x"], ["Y", "y"], ["Check Bounds Collide", "checkWorldBounds"], ["Anchor X", "anchor.x"], ["Anchor Y", "anchor.y"]]), "prop");
    this.appendValueInput("prop_val")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("value");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};*/

Blockly.Blocks['phaser_set_game_obj_props'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField("Set Property");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["Angle", "angle"], ["Alpha", "alpha"],["X", "x"], ["Y", "y"], ["Scale X", "scale.x"], ["Scale Y", "scale.y"], ["Offset X", "offset.x"], ["Offset Y", "offset.y"],  ["Frame", "frame"], ["Set Anchor", "anchor"], ["Exists", "exists"], ["Visible", "visible"], ["Enable Body", "enableBody"], ["Physics Body Type", "physicsBodyType"], ["Check Bounds Collide", "checkWorldBounds"], ["Anchor X", "anchor.x"], ["Anchor Y", "anchor.y"], ["Rotation", "rotation"], ["Fixed To Camera", "fixedToCamera"], ["Kill when Out of Bounnds", "outOfBoundsKill"], ["Dirty", "dirty"]]), "prop");
    this.appendDummyInput()
        .appendField("of");
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("item"), "game_obj");
    this.appendValueInput("prop_val")
        .appendField("value");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};


Blockly.Blocks['phaser_get_game_obj_props'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField("Get Property");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldDropdown([["Angle", "angle"], ["Visible", "visible"], ["Enable Body", "enableBody"], ["Physics Body Type", "physicsBodyType"], ["X", "x"], ["Y", "y"], ["Width","width"], ["Height","height"] ,["Check Bounds Collide", "checkWorldBounds"], ["Anchor X", "anchor.x"], ["Anchor Y", "anchor.y"], ["Rotation", "rotation"], ["Exists", "exists"]]), "prop");
    this.appendDummyInput()
        .appendField("for");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldVariable("item"), "game_obj");
    this.setInputsInline(true);
    //this.setPreviousStatement(true);
    //this.setNextStatement(true);
    this.setOutput(true);  
    this.setTooltip('');
  }
};

Blockly.Blocks['phaser_physics'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField("Physics");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldDropdown([["Arcade", "Phaser.Physics.Arcade"], ["P2", "Phaser.Physics.P2JS"]]), "prop");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['phaser_enable_obj_physics'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField("Enable ");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldDropdown([["Arcade", "Phaser.Physics.Arcade"], ["P2", "Phaser.Physics.P2JS"]]), "phys");
    this.appendDummyInput()
        .appendField("On");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldVariable("item"), "game_obj");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['phaser_obj_collide'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Add");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldDropdown([["Arcade", "arcade"], ["P2", "P2JS"]]), "phys");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(" Collision between");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldVariable("item"), "game_obj1");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("And");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldVariable("item"), "game_obj2");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Executing");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldTextInput("function"), "callback");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};



Blockly.Blocks['phaser_world_center_x'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField("World Center - X");
    this.setOutput(true, "Number");
    this.setTooltip('');
  }
};

Blockly.Blocks['phaser_world_center_y'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField("World Center - Y");
    this.setOutput(true, "Number");
    this.setTooltip('');
  }
};

/*
Blockly.Blocks['phaser_world_width'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField("World Width");
    this.setOutput(true, "Number");
    this.setTooltip('');
  }
};

Blockly.Blocks['phaser_world_height'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField("World Height");
    this.setOutput(true, "Number");
    this.setTooltip('');
  }
};
*/


Blockly.Blocks['phaser_add_text'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField("Add Text");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldTextInput("text to add"), "text_to_add");
    this.appendValueInput("x")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("X");
    this.appendValueInput("y")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Y");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Font Size  ")
        .appendField(new Blockly.FieldTextInput("20"), "font_size")
        .appendField("px");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Font  ")
        .appendField(new Blockly.FieldTextInput("Arial"), "font_face")
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Fill  ")
        .appendField(new Blockly.FieldColour("#6600cc"), "fill_color");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Align")
        .appendField(new Blockly.FieldDropdown([["Left", "left"], ["Right", "right"], ["Center", "center"]]), "text_align");
    this.setInputsInline(false);
    this.setOutput(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['phaser_kill_obj'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField("Kill Object");
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("item"), "obj_to_kill");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['phaser_call_all_obj'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField("Call All on Group");
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("item"), "obj_to_kill")
        .appendField("  Action");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldTextInput("default"), "NAME");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['phaser_set_all_obj'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField("Set All on group");
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("item"), "grp_to_setall")
        .appendField("  Action");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(" property ")
        .appendField(new Blockly.FieldTextInput("default"), "NAME");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(" to ")
        .appendField(new Blockly.FieldTextInput("default"), "VALUE");
      this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};



Blockly.Blocks['functions_new_func'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField("New function");
    this.appendStatementInput("NAME");
    this.setOutput(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['phaser_load_spritesheet'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField("Add Spritesheet");
    this.appendValueInput("id")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("  id");
    this.appendValueInput("img_src")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Image Source");
    this.appendValueInput("width")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("  Frame Width");
    this.appendValueInput("height")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(" Frame Height");
    this.appendValueInput("num_frames")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("  # of frames");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['phaser_load_tilemap'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField("Load Tilemap");
    this.appendValueInput("id")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Id");
    this.appendValueInput("mapfile")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Map File");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Map Type")
        .appendField(new Blockly.FieldDropdown([["JSON", "Phaser.Tilemap.TILED_JSON"]]), "NAME");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['phaser_add_tilemap'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField("Add Tilemap");
    this.appendValueInput("id")
        .setCheck("String");
    this.appendValueInput("tile_width")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Tile Width");
    this.appendValueInput("tile_height")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Tile Height");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['phaser_create_maplayer'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField("Create Map Layer using");
    this.appendValueInput("id")
        .setCheck("String");
    this.appendDummyInput()
        .appendField("from");
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("item"), "game_obj");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['phaser_add_map_tileset'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField("Add ");
    this.appendValueInput("id")
        .setCheck("String");
    this.appendDummyInput()
        .appendField("Tileset From");
    this.appendValueInput("img_id")
        .setCheck("String");
    this.appendDummyInput()
        .appendField("image to");
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("item"), "game_obj");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['phaser_resize_world_layer'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField("Resize World To Layer");
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("item"), "game_obj");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['phaser_add_animation'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField("Add Animaton");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Id")
        .appendField(new Blockly.FieldTextInput("idle"), "anim_id");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(" for ")
        .appendField(new Blockly.FieldVariable("item"), "game_obj");
    this.appendValueInput("frames")
        .setCheck("Array")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("using Frames");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['phaser_add_animation_range'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField("Add Animaton");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Id")
        .appendField(new Blockly.FieldTextInput("idle"), "anim_id");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(" for ")
        .appendField(new Blockly.FieldVariable("item"), "game_obj");
    this.appendValueInput("framestart")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("using Frames Between");
    this.appendValueInput("frameend")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("and");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['phaser_add_animation_single'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField("Add Single Frame Animaton");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Id")
        .appendField(new Blockly.FieldTextInput("idle"), "anim_id");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(" for ")
        .appendField(new Blockly.FieldVariable("item"), "game_obj");
    this.appendValueInput("frames")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("using Frame");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};


Blockly.Blocks['phaser_play_animation'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Play Animaton");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Id")
        .appendField(new Blockly.FieldTextInput("idle"), "anim_id");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(" for ")
        .appendField(new Blockly.FieldVariable("item"), "game_obj");
    this.appendValueInput("framerate")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("@");
    this.appendValueInput("loop")
        .setCheck("Boolean")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Frames per sec.   Loop");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};


Blockly.Blocks['phaser_stop_animation'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Stop Animaton");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(" for ")
        .appendField(new Blockly.FieldVariable("item"), "game_obj");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};



Blockly.Blocks['phaser_set_bg_color'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField("Set Background Color")
        .appendField(new Blockly.FieldColour("#ff0000"), "bg_color");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['phaser_add_cursor_keys'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField("Enable Cursor Keys");
    //this.setPreviousStatement(true);
    //this.setNextStatement(true);
    this.setOutput(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['phaser_add_a_key'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField("Add an Input key")
        .appendField(new Blockly.FieldDropdown([["Enter", "Phaser.Keyboard.ENTER"],["Spacebar", "Phaser.Keyboard.SPACEBAR"], ["W", "Phaser.Keyboard.W"], ["A", "Phaser.Keyboard.A"], ["S", "Phaser.Keyboard.S"], ["D", "Phaser.Keyboard.D"]]), "key");
    this.setOutput(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['phaser_get_curs_key_state'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField("Check if Arrow Key")
        .appendField(new Blockly.FieldDropdown([["Down", "down"], ["Up", "up"], ["Left", "left"], ["Right", "right"]]), "c_key");
    this.appendDummyInput()
        .appendField("is")
        .appendField(new Blockly.FieldDropdown([["Pushed", "isDown"], ["Released", "isUp"], ["Being Pressed", "isPressed"]]), "state");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['phaser_camera_follow'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField("Camera Follow");
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("item"), "game_obj");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['phaser_stop_camera_follow'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField("Stop Camera Follow");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};


Blockly.Blocks['phaser_add_audio'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField("Add Audio");
    this.appendValueInput("NAME")
        .setCheck("String")
        .appendField("Id");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['phaser_input_add'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField("Input Add"); // for
    /*this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("item"), "game_obj");*/
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["On Down", "onDown"], ["On Up", "onUp"], ["On Tap", "onTap"], ["On Hold", "onHold"]]), "evt");
    this.appendDummyInput()
        .appendField("Call Function")
        .appendField(new Blockly.FieldTextInput(""), "callback");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['phaser_get_world_property'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField("Get World Property");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["Center X", "centerX"], ["Center Y", "centerY"], ["Height", "height"], ["Width", "width"], ["Bottom", "bounds.bottom"], ["Top", "bounds.top"], ["Left", "bounds.left"], ["Right", "bounds.right"]]), "prop");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['phaser_get_game_property'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField("Get Game Property");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["Height", "height"], ["Width", "width"]]), "prop");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip('');
  }
};


Blockly.Blocks['phaser_time_now'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField("Time Now");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['phaser_group_removeall'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField("Remove all items from")
        .appendField(new Blockly.FieldVariable("item"), "grp_obj")
        .appendField("Group");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

/*
Blockly.Blocks['phaser_group_getfirstdead'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField("Get First Dead Group item from")
        .appendField(new Blockly.FieldVariable("item"), "grp_obj")
        .appendField("Group");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};
*/

Blockly.Blocks['phaser_group_getfirstdead'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Get First Dead Group item from");
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("group"), "grp");
    this.appendDummyInput()
        .appendField("group");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['phaser_timer_start'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField("Start Timer");
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("item"), "tim_obj");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['phaser_timer_stop'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField("Stop Timer");
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("item"), "tim_obj");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['phaser_reset_obj_pos'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField("Reset");
    this.appendValueInput("x_pos")
        .appendField("X");
    this.appendValueInput("y_pos")
        .appendField("and Y");
    this.appendDummyInput()
        .appendField("of")
        .appendField(new Blockly.FieldVariable("item"), "game_obj");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['phaser_play_audio'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField("Play Sound");
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("item"), "aud_obj");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['phaser_stop_audio'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField("Stop Sound");
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("item"), "aud_obj");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['phaser_autoscroll_tile_sprite'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField("Autoscroll");
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("item"), "game_obj");
    this.appendValueInput("x_pos")
        .appendField("X by");
    this.appendValueInput("y_pos")
        .appendField("and Y by");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['phaser_time_units'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField("Time Units");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["Minute", "MINUTE"], ["Second", "SECOND"], ["Half Second", "HALF"], ["Quarter Second", "QUARTER"]]), "time_unit");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip('');
  }
};

/*Blockly.Blocks['phaser_loop_timer_event'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField("Create loop timer");
    this.appendValueInput("delay")
        .appendField("Delay");
     this.appendValueInput("callback")
        .appendField("Call Function");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip('');
  }
};*/

Blockly.Blocks['phaser_loop_timer_event'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField("Create loop timer");
    this.appendValueInput("delay")
        .setCheck("Number")
        .appendField("Delay");
    this.appendDummyInput()
        .appendField("Call function")
        .appendField(new Blockly.FieldTextInput(""), "callback");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['phaser_random_int_range'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField("Random number");
    this.appendValueInput("int1")
        .setCheck("Number")
        .appendField("between");
    this.appendValueInput("int2")
        .setCheck("Number")
        .appendField("and");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['phaser_set_text'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField("Set Text for")
        .appendField(new Blockly.FieldVariable("item"), "game_obj");
    this.appendValueInput("text")
        .setCheck("String")
        .appendField("To");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['phaser_set_map_collision'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendValueInput("tile_id")
        .appendField("Set Tile Collision for map")
        .appendField(new Blockly.FieldVariable("item"), "game_obj")
        .appendField(" using Tile Id:");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['phaser_set_map_collision_between'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendValueInput("tile_id1")
        .appendField("Set Tile Collision for map")
        .appendField(new Blockly.FieldVariable("item"), "game_obj")
        .appendField(" between Tile Id 1:");
    this.appendValueInput("tile_id2")
        .appendField("and Tile Id 2:");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['phaser_move_obj_to'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["Arcade", "arcade"], ["P2", "P2JS"]]), "phys")
        .appendField("Move")
        .appendField(new Blockly.FieldVariable("item"), "game_obj1")
        .appendField("  toward")
        .appendField(new Blockly.FieldVariable("item"), "game_obj2");
    this.appendValueInput("move_speed")
        .appendField("at speed:");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['phaser_distance_between'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["Arcade", "arcade"], ["P2", "P2JS"]]), "phys")
        .appendField("Distance Between")
        .appendField(new Blockly.FieldVariable("item"), "game_obj1")
        .appendField(" and ")
        .appendField(new Blockly.FieldVariable("item"), "game_obj2");
    this.setInputsInline(true);
    this.setOutput(true);
    //this.setPreviousStatement(true);
    //this.setNextStatement(true);
    this.setTooltip('');
  }
};



Blockly.Blocks['phaser_direction'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField("Get Game Direction")
        .appendField(new Blockly.FieldDropdown([["Left", "LEFT"], ["Right", "RIGHT"], ["Up", "UP"], ["Down", "DOWN"], ["None", "NONE"]]), "dir");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['phaser_new_point'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField("Create A Point Object");
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField("X");
    this.appendValueInput("y")
        .setCheck("Number")
        .appendField("Y");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['jsobj_create_with'] = {
  /**
   * Block for creating a list with any number of elements of any type.
   * @this Blockly.Block
   */
  init: function() {
    this.setColour(260);
    this.itemCount_ = 3;
    this.updateShape_();
    this.setOutput(true, null);
    this.setMutator(new Blockly.Mutator(['lists_create_with_item']));
    //this.setMutator(new Blockly.Mutator(['sets_create_with_item']));  
    //this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_TOOLTIP);
  },
  /**
   * Create XML to represent list inputs.
   * @return {Element} XML storage element.
   * @this Blockly.Block
   */
  mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('items', this.itemCount_);
    return container;
  },
  /**
   * Parse XML to restore the list inputs.
   * @param {!Element} xmlElement XML storage element.
   * @this Blockly.Block
   */
  domToMutation: function(xmlElement) {
    this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10);
    this.updateShape_();
  },
  /**
   * Populate the mutator's dialog with this block's components.
   * @param {!Blockly.Workspace} workspace Mutator's workspace.
   * @return {!Blockly.Block} Root block in mutator.
   * @this Blockly.Block
   */
  decompose: function(workspace) {
    var containerBlock =
        Blockly.Block.obtain(workspace, 'sets_create_with_container');
    containerBlock.initSvg();
    var connection = containerBlock.getInput('STACK').connection;
    for (var i = 0; i < this.itemCount_; i++) {
      var itemBlock = Blockly.Block.obtain(workspace, 'lists_create_with_item');
      //var itemBlock = Blockly.Block.obtain(workspace, 'sets_create_with_item');
        
      itemBlock.initSvg();
      connection.connect(itemBlock.previousConnection);
      connection = itemBlock.nextConnection;
    }
    return containerBlock;
  },
  /**
   * Reconfigure this block based on the mutator dialog's components.
   * @param {!Blockly.Block} containerBlock Root block in mutator.
   * @this Blockly.Block
   */
  compose: function(containerBlock) {
    var itemBlock = containerBlock.getInputTargetBlock('STACK');
    // Count number of inputs.
    var connections = [];
    var i = 0;
    while (itemBlock) {
      connections[i] = itemBlock.valueConnection_;
      itemBlock = itemBlock.nextConnection &&
          itemBlock.nextConnection.targetBlock();
      i++;
    }
    this.itemCount_ = i;
    this.updateShape_();
    // Reconnect any child blocks.
    for (var i = 0; i < this.itemCount_; i++) {
      if (connections[i]) {
        this.getInput('ADD' + i).connection.connect(connections[i]);
      }
    }
  },
  /**
   * Store pointers to any connected child blocks.
   * @param {!Blockly.Block} containerBlock Root block in mutator.
   * @this Blockly.Block
   */
  saveConnections: function(containerBlock) {
    var itemBlock = containerBlock.getInputTargetBlock('STACK');
    var i = 0;
    while (itemBlock) {
      var input = this.getInput('ADD' + i);
      itemBlock.valueConnection_ = input && input.connection.targetConnection;
      i++;
      itemBlock = itemBlock.nextConnection &&
          itemBlock.nextConnection.targetBlock();
    }
  },
  /**
   * Modify this block to have the correct number of inputs.
   * @private
   * @this Blockly.Block
   */
  updateShape_: function() {
    // Delete everything.
    if (this.getInput('EMPTY')) {
      this.removeInput('EMPTY');
    } else {
      var i = 0;
      while (this.getInput('ADD' + i)) {
        this.removeInput('ADD' + i);
        i++;
      }
    }
    // Rebuild block.
    if (this.itemCount_ == 0) {
      this.appendDummyInput('EMPTY')
          //.appendField(Blockly.Msg.LISTS_CREATE_EMPTY_TITLE);
          .appendField('create set with');
    } else {
      for (var i = 0; i < this.itemCount_; i++) {
        var input = this.appendValueInput('ADD' + i);
        if (i == 0) {
          //input.appendField(Blockly.Msg.LISTS_CREATE_WITH_INPUT_WITH);
          input.appendField('create set with');
        }
      }
    }
  }
};

Blockly.Blocks['sets_create_with_container'] = {
  /**
   * Mutator block for list container.
   * @this Blockly.Block
   */
  init: function() {
    this.setColour(160);
    this.appendDummyInput()
        //.appendField(Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TITLE_ADD);
        .appendField('set');
    this.appendStatementInput('STACK');
    //this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TOOLTIP);
    this.contextMenu = false;
  }
};

Blockly.Blocks['misc_key_val_pair'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(150);
    this.appendValueInput("key")
        .appendField("Set a Key");
    this.appendValueInput("value")
        .appendField("and Value");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['phaser_on_click_touch'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField("When screen is clicked or touched call")
        .appendField(new Blockly.FieldTextInput("function"), "callback");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['phaser_create_tween'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField("Create a tween for")
        .appendField(new Blockly.FieldVariable("item"), "game_obj");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['phaser_start_tween'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField("Start Tween")
        .appendField(new Blockly.FieldVariable("item"), "game_obj");
    this.setInputsInline(true);
    this.setOutput(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};


Blockly.Blocks['phaser_tween_to_settings'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField("Add  'Tween.To'  settings for:")
        .appendField(new Blockly.FieldVariable("item"), "game_obj");
    this.appendValueInput("props")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Properties");
    this.appendValueInput("duration")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Duration");
    //this.appendValueInput("ease")
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Type")
        .appendField(new Blockly.FieldDropdown([["Linear", "Linear"], ["Sine", "Sine.easeOut"], ["Sine In", "Sine.easeIn"], ["Sine InOut", "Sine.easeInOut"], ["Exponential", "Expo.easeOut"], ["Exponential In", "Expo.easeIn"], ["Exponential InOut", "Expo.easeInOut"], ["Circ", "Circ.easeOut"], ["Circ In", "Circ.easeIn"], ["Circ InOut", "Circ.easeInOut"], ["Elastic", "Elastic.easeOut"], ["Elastic In", "Elastic.easeIn"], ["Elastic InOut", "Elastic.easeInOut"], ["Bounce", "Elastic.easeOut"], ["Bounce In", "Bounce.easeIn"], ["Bounce InOut", "Bounce.easeInOut"]]), "ease");
    this.appendValueInput("autostart")
        .setCheck("Boolean")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Autostart");
    this.appendValueInput("delay")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Start Delay");
    this.appendValueInput("repeat")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Repeat");
    this.appendValueInput("yoyo")
        .setCheck("Boolean")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Yoyo");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['phaser_tileindex_callback'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField("Call function")
        .appendField(new Blockly.FieldTextInput("default"), "callback");
    this.appendDummyInput()
        .appendField(" when touching")
        .appendField(new Blockly.FieldVariable("item"), "game_obj");
    this.appendValueInput("map_tile")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("map tile id");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['phaser_set_text_shadow'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField("Add shadow to")
        .appendField(new Blockly.FieldVariable("Text Object "), "game_obj");
    this.appendValueInput("x_dist")
        .setCheck("Number")
        .appendField("with X distance:");
    this.appendValueInput("y_dist")
        .setCheck("Number")
        .appendField("and Y distance:");
    this.appendDummyInput()
        .appendField("color")
        .appendField(new Blockly.FieldColour("#ff0000"), "color");
    this.appendValueInput("opac")
        .setCheck("Number")
        .appendField("opacity");
    this.appendValueInput("blur")
        .setCheck("Number")
        .appendField("Blur");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};


Blockly.Blocks['phaser_move_camera'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField("Move Camera");
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField("to X:");
    this.appendValueInput("y")
        .setCheck("Number")
        .appendField("and Y:");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['phaser_set_world_bounds'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField("Set World Size");
    this.appendValueInput("x_pos")
        .appendField("X");
    this.appendValueInput("y_pos")
        .appendField("and Y");
    this.appendValueInput("width")
        .appendField(" wide ");
    this.appendValueInput("height")
        .appendField("height");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['phaser_crossorigin'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Use files from other sites");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['phaser_foreach_grp_alive'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Loop through all Items in")
        .appendField(new Blockly.FieldVariable("group"), "group");
    this.appendDummyInput()
        .appendField("using")
        .appendField(new Blockly.FieldTextInput("item"), "itm");
    this.appendDummyInput()
        .appendField("and calling")
        .appendField(new Blockly.FieldTextInput("function"), "callback");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['phaser_add_to_grp_ret'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Add Sprite to group")
        .appendField(new Blockly.FieldVariable("group"), "group");
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField("x");
    this.appendValueInput("y")
        .setCheck("Number")
        .appendField("y");
    this.appendValueInput("id")
        .setCheck("String")
        .appendField("id");
    this.appendValueInput("src")
        .setCheck("String")
        .appendField("src");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['phaser_get_image_prop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Get Image asset Property")
        .appendField(new Blockly.FieldTextInput("item"), "img_id")
        .appendField("property")
        .appendField(new Blockly.FieldDropdown([["Width", "width"], ["Height", "height"]]), "prop");
    this.setOutput(true);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['phaser_create_mult_grp_item'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Create Multiple");
    this.appendValueInput("num_items")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("items in")
        .appendField(new Blockly.FieldVariable("group"), "grp")
        .appendField("using ")
        .appendField(new Blockly.FieldTextInput("image id"), "img_id");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['new_line_char'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("New Line");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
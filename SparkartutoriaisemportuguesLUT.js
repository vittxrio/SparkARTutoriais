const Materials = require('Materials');
const Scene = require('Scene');
const NativeUI = require('NativeUI');
const Textures = require('Textures');
const Patches = require('Patches');
const TouchGestures = require('TouchGestures');

const index = 0;
const configuration = {
  selectedIndex: index,
  items: [
    {image_texture: Textures.get('IMG_1067')},
{image_texture: Textures.get('anime 2')},
{image_texture: Textures.get('anime 3')},   
  ],
};
const picker = NativeUI.picker;
picker.configure(configuration);
picker.visible = true;

picker.selectedIndex.monitor().subscribe(function(val) {
  Patches.setScalarValue("Number", val.newValue);
});

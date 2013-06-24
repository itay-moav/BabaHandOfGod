Baba, Hand of God
=================

Let's say a user want's to press a link, but you want to
POINT to him he needs to do something else first, Fire the Baba
plugin to point the user in the right direction.

//USAGE
-- Include the plugin file.
-- Add the following line
 $(SELECTOR OF ITEM TO TRIGGER THE EVENT).babaHandOfGod({src:'PATH TO THE IMAGE I WANT TO USE','PointTo':'#ID OF ELEMENT TO POINT THOWRDS'});

 This will fire a moving finger from bottom page all the way to the location of [#ID OF ELEMENT TO POINT THOWRDS].
 This will happen when user clicks [SELECTOR OF ITEM TO TRIGGER THE EVENT]
 
 -- U can also add another option, dir, to tell the plugin where to shoot the finger from. Below, available values.
    dir:'top'
	dir:'right'
	dir:'bottom'
	dir:'left'
	
    For example $(SELECTOR OF ITEM TO TRIGGER THE EVENT).babaHandOfGod({src:'PATH TO THE IMAGE I WANT TO USE','PointTo':'#ID OF ELEMENT TO POINT THOWRDS',dir:'top'});
 
 
 -- There is also             'deltaLeft:':0,'deltaHeight':0 .... Which I forgot what they do...sorry.
 

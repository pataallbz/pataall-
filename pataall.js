function getValue(){
    bricks_size=200;
    block_size=400;
    course_size=115;
    document.getElementById("p4").innerHTML="Brick Size: "+bricks_size;
    length=parseInt(document.getElementById("length").value);
    document.getElementById("p1").innerHTML="length: " + length;
    height=parseInt(document.getElementById("height").value);
    course_no=height/course_size;
    document.getElementById("p10").innerHTML="Courses: "+ Math.ceil(course_no);
    
    document.getElementById("p2").innerHTML="Height: "+ height;
    bricks_single_course=length/bricks_size;
    bricks_no=bricks_single_course*course_no;
    document.getElementById("p3").innerHTML="Number of Bricks: "+ Math.ceil(bricks_no);
    //Cement
    bag1=200;
    cement=bricks_no/bag1;
    document.getElementById("p5").innerHTML="Cement: "+Math.ceil(cement);
    //sand
    sand1=3;
    canter=50
    teaper=80
    sand=cement * sand1;
    if (sand <50){
        document.getElementById("p6").innerHTML="Sand: "+ Math.ceil(sand/canter) + "canter";
    }
    else {
        
        document.getElementById("p6").innerHTML="Sand: " + Math.ceil(sand/teaper) +" teapers, " + " or " + Math.ceil(sand) +":  wheelbarrows";
        
    }
    
    //dTen
    dten=(length/11700)*4;
    document.getElementById("p7").innerHTML="D10: " + Math.ceil(dten) +" bars";
    
    //RSix
    
    rsix=1/2 * dten;
    document.getElementById("p8").innerHTML="R6: "+ Math.ceil(rsix)+" bars";
    
    //Binding Wire
    
    binding=rsix;
    document.getElementById("p9").innerHTML="Binding Wire: " + Math.ceil(binding) +" bars";
    //Timber
    eight1=length*2;
    document.getElementById("p11").innerHTML="Timber-8x1: "+ Math.ceil(eight1/300) + " feets";
    
    //sixone
    sixone=parseInt(document.getElementById("bottom").value);
    document.getElementById("p12").innerHTML="Timber 6x1: " + Math.ceil(sixone/300) + " feets";
}
function calcSlab(){
    a=parseInt(document.getElementById("slab_length").value);
    b=parseInt(document.getElementById("slab_width").value);
    area=a*b;
    document.getElementById("p").innerHTML="Area: " + area;
}

function quotToilet(){
    a=parseInt(document.getElementById("toilett").value);
    document.getElementById("tp").innerHTML=a+ "doors";
}
function calcTiles(){
    //formula//
    a_tile=parseInt(document.getElementById("length_floor").value);
    b_tile=parseInt(document.getElementById("width_floor").value);
    floor_area= a_tile * b_tile;
    floor_tile=300*300;
    tile_number=floor_area/floor_tile;
    tile_box=17;
    box_number=tile_number/tile_box;
    cementTileBox=4;
    bagCement=box_number/cementTileBox;
    //posting//
    document.getElementById("floor_tileArea").innerHTML="Floor Area:  " + floor_area;
    document.getElementById("tileSize").innerHTML="Tile size: 300 by 300 mm";
    if (tile_number < tile_box){
        document.getElementById("boxNumber").innerHTML="Tiles:  " + Math.ceil (tile_number) + "Pieces";
    }
    else {
        document.getElementById("boxNumber").innerHTML="Number of Boxes:  " + Math.ceil (box_number);
    }
    document.getElementById("tileCement").innerHTML="Cement:  " + Math.ceil(bagCement)  +"" + "bags"; 
}
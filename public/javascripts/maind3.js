d3.select(window).on("resize",resize);
resize();

//document.getElementById("myBtn").onclick = function() {addingCircles()};

function resize(){
    //calling new series of circles
    $(document).ready(function(){
        $("#myBtn").click(function(){
            //$(this).hide();
            addingCircles();
        });
    });

    //Adding three more circles
    function addingCircles(){
        let width = window.innerWidth - 50,
            height = window.innerWidth - 50;
        let nodes2 = [
            {name:'werer'},
            {name:'sdfsdf'},
            {name:'sdfsdef'}
        ];
        // build nodes in d3
        let node2 = d3.select('svg').selectAll('.node2')
            .data(nodes2)
            .enter().append('circle')
            .attr('class','node2')
            .attr('cx', function (d,i){ return (i+1)*(width/4)})
            .attr('cy', function (d,i){ return height/2;})
            .attr('r', width*0.05)
        //.attr('cursor','pointer');

        //append a shape or image

    }

    let svgTest =d3.select("body").select("svg");
    if(!svgTest.empty()){
        svgTest.remove();
    }

    // set a width and height for our SVG
    //console.log(window.innerWidth);
    let width = window.innerWidth - 50,
        height = window.innerHeight - 50;

// Defining some colors
    let colors = [
        {color:'red'},
        {color:'blue'},
        {color:'green'},
        {color:'yellow'},
        {color:'orange'},
    ]


// Define the nodes to be drawn
    let nodes = [
        {name: 'Alice'},
        {name: 'Bob'},
        {name: 'Eve'},
        {name: 'mohammad'},
        {name: 'mohsen'}
    ];

    let mains = [
        {name:'expense',size:3},
        {name:'prize',size: 2},
        {name:'salary',size: 4}
    ]

//add links
    let links = [
        { source : 0,target:1},
        { source : 1,target:2},
        { source : 2,target:3},
        { source : 3,target:4},
        { source : 4,target:0}
    ]

    let mainLinks = [
        { source: 0,target:1},
        { source: 1,target:2},
        { source: 2,target:0}
    ]

// Add a SVG to the body for our graph
    let svg = d3.select('body').append('svg')
        .attr('width', width)
        .attr('height', height)
        .attr('id','svgId');

// add links to svg
    let link = svg.selectAll('.link')
        .data(links)
        .enter().append('line')
        .attr('class','link');

// Now it's the main variables turn. Each node is drawn as a circle
    let main = svg.selectAll('.main')
        .data(mains)
        .enter().append('circle')
        .attr('class','main')
        .style('fill',function (d,i){ return colors[i].color})
        .attr('cx', function (d,i){ return (i+1)*(width/4)})
        .attr('cy', function(d,i) { return height/2; })
        .attr('r', function (d,i) { return d.size*5})
        .attr('cursor','move');


// Now it's the nodes turn. Each node is drawn as a circle.
    let node = svg.selectAll('.node')
        .data(nodes)
        .enter().append('circle')
        .attr('class', 'node')
        .attr('cx', function(d,i) { return (i+1)*(width/4); }) //relative position
        .attr('cy', function(d,i) { return height/2; }) //relative position
        .attr('r', /*Math.random()**/(width*0.03)).attr('cursor','move'); //radius = size of circle
    ;
    /*//adding some style to our svg tag
    svg.style("opacity", 0)
        .transition()
        .duration(2000)
        .style("opacity",1);*/


// create the force layout graph
    let force = d3.layout.force()
        .size([width, height])
        .nodes(nodes)
        .links(links)
        .on('tick',tick)
        //.charge(0.5)
        .gravity(0.5)
        .linkDistance(width/4)
        .start();
    let forceForMain = d3.layout.force()
        .size([width,height])
        .nodes(mains)
        /*.links(mainLinks)*/
        .on('tick',tick)
        .gravity(0.08)
        .linkDistance(width/2)
        .start();


    function tick() {
        node.attr('cx', function (d){ return d.x;})
            .attr('cy',function (d){ return d.y;})
            .call(force.drag);

        main.attr('cx', function (d){ return d.x;})
            .attr('cy',function (d){ return d.y;})
            .call(forceForMain.drag);


        /*link.attr('x1',function (d){ return d.source.x;})
            .attr('y1',function (d){ return d.source.y;})
            .attr('x2',function (d){ return d.target.x;})
            .attr('y2',function (d){ return d.target.y;})*/
    }

    bar = svg.append('rect');
    drag = d3.behavior.drag();



    // This function is called on drag
    function move(d) {
        var bar = d3.select(this);
        // Update the position of the bar by adding the drag distance in each coordinate
        bar.attr('x', parseInt(bar.attr('x'), 10) + d3.event.dx)
            .attr('y', parseInt(bar.attr('y'), 10) + d3.event.dy);
    }

    drag.origin(Object)
        .on('drag', move);

    bar = svg.append('rect'),
        bar.attr('x', (width - 200) / 2)
            .attr('y', (height - 200) / 2)
            .attr('width', 200)
            .attr('height', 200)
            .attr('fill', '#98CFEA')
            .call(drag);
}



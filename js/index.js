function calculate() {

    var speed = parseInt($("#speed").val());
    var distance = parseInt($("#distance").val());
    var widtth = parseInt($("#width").val());
    var duration = parseInt($("#duration").val());
    var acc = parseInt($("#acc").val());
    var dec = parseInt($("#dec").val());
    dec = -dec;
    if (speed < 20 || speed > 80 || !speed ||
        distance < 7 || distance > 50 || !distance ||
        widtth < 7 || widtth > 50 || !widtth ||
        duration < 2 || duration > 4 || !duration ||
        acc < 1 || acc > 3 || !acc ||
        dec < (-3) || dec > (-1) || !dec) {
        $("#message").text("Your inputs are not valid, please re-enter them, page will be reloaded within seconds");
        $(".modal-content").css("background", "red");
        $("#graph").attr("disabled","true");
        setInterval( function () {
            location.reload();
        }, 3000);

        return;
    }
    speed = speed*1000/3600;
    var totalDistance = (distance + widtth);
    if (totalDistance < speed * duration + (acc*duration*duration)/2) {
        $("#message").text("You can pass");
        $(".modal-content").css("background", "lightgreen");
        createChart(speed,acc)
    }
    else if (distance > speed * duration + (dec*duration*duration)/2) {
        $("#message").text("You Have to STOP!!!");
        $(".modal-content").css("background", "indianred");
        createChart(speed,dec)
    }
    if(distance > speed * duration + (dec*duration*duration)/2 && totalDistance < speed * duration + (acc*duration*duration)/2){
        $("#message").text("It's your choice but it's better to stop");
        $(".modal-content").css("background", "rgba(166,170,15,0.9)");
        createChart(speed,dec)
    }
    else if(!(distance > speed * duration + (dec*duration*duration)/2) && !(totalDistance < speed * duration + (acc*duration*duration)/2)){
        $("#message").text("Sorry but you cannot stop or pass you are going to fail");
        $(".modal-content").css("background", "skyblue");
        createChart(speed,dec)
    }
}

function createChart(speed, acc) {
    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        title:{
            text: "Speed And Distance Time Graph"
        },
        toolTip: {
            shared: true
        },
        axisX: {
            title: "Time",
            suffix : " s"
        },
        axisY: {
            title: "Speed",
            titleFontColor: "#4F81BC",
            suffix : " m/s",
            lineColor: "#4F81BC",
            tickColor: "#4F81BC"
        },
        axisY2: {
            title: "Distance",
            titleFontColor: "#C0504E",
            suffix : " m",
            lineColor: "#C0504E",
            tickColor: "#C0504E"
        },
        data: [{
            type: "spline",
            name: "speed",
            xValueFormatString: "#### sec",
            yValueFormatString: "#,##0.00 m/s",
            dataPoints: [
                // { x: 0.0, y: 0 },
                { x: 0.1, y: speed + acc*0.1 },
                { x: 0.3, y: speed + acc*0.3 },
                { x: 0.4, y: speed + acc*0.4 },
                { x: 0.5, y: speed + acc*0.5 },
                { x: 0.8, y: speed + acc*0.8 },
                { x: 1.1, y: speed + acc*1.1 },
                { x: 1.5, y: speed + acc*1.5 },
                { x: 1.9, y: speed + acc*1.9 },
                { x: 2.4, y: speed + acc*2.4 },
                { x: 2.9, y: speed + acc*2.9 },
                { x: 3.2, y: speed + acc*3.2 },
                { x: 3.4, y: speed + acc*3.4 },
                { x: 3.6, y: speed + acc*3.6 },
                { x: 3.8, y: speed + acc*3.8 },
                { x: 4.0, y: speed + acc*4.0 }
            ]
        },
            {
                type: "spline",
                axisYType: "secondary",
                name: "distance covered",
                yValueFormatString: "#,##0.# m",
                dataPoints: [
                    // { x: 0.0, y: 0 },
                    { x: 0.1, y: 0.1*speed + (acc*0.1*0.1)/2 },
                    { x: 0.3, y: 0.3*speed + (acc*0.3*0.3)/2 },
                    { x: 0.4, y: 0.4*speed + (acc*0.4*0.4)/2 },
                    { x: 0.5, y: 0.5*speed + (acc*0.5*0.5)/2 },
                    { x: 0.8, y: 0.8*speed + (acc*0.8*0.8)/2 },
                    { x: 1.1, y: 1.1*speed + (acc*1.1*1.1)/2 },
                    { x: 1.5, y: 1.5*speed + (acc*1.5*1.5)/2 },
                    { x: 1.9, y: 1.9*speed + (acc*1.9*1.9)/2 },
                    { x: 2.4, y: 2.4*speed + (acc*2.4*2.4)/2 },
                    { x: 2.9, y: 2.9*speed + (acc*2.9*2.9)/2 },
                    { x: 3.2, y: 3.2*speed + (acc*3.2*3.2)/2 },
                    { x: 3.4, y: 3.4*speed + (acc*3.4*3.4)/2 },
                    { x: 3.6, y: 3.6*speed + (acc*3.6*3.6)/2 },
                    { x: 3.8, y: 3.8*speed + (acc*3.8*3.8)/2 },
                    { x: 4.0, y: 4.0*speed + (acc*4.0*4.0)/2 }
                ]
            }]
    });
    chart.render();
}
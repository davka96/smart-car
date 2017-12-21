# smart-car
This is a small project, which calculates and shows to drivers if they can pass the crossroad or they have to stop, depending on their inputs
There can be 5 types of output.

First of all if don't enter valid numbers the modal will show that your inputs are not valid and will reload the page after 3 seconds.

Second case is when the car has to pass the crossroad, as the distance is not so much and car's velocity is high. For example try to enter following inputs
80,20,10,2,3,1 respectivly to speed, distance, width, duration, acc, dec. 

Third case is when car can't pass and driver should stop the car. Try these inputs 20,20,30,2,3,3.

The other case is when you can do both. It's on your decision to stop or to accelerate and pass. Try these inputs 80,40,10,2,3,3.

The last case is when you can not pass nor to stop. Try the following 70,10,40,2,1,1

When you submit your inputs, modal will be opened and there is a button which says 'see the graph', so you can see it under the form

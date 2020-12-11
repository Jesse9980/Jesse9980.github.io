//works with this p5 sketch:
//https://editor.p5js.org/jesse_harding/sketches/d5m0xjyRu

//variables for outgoing data
int analogVal;
int digitalVal;
String delimiter = "&";

//variable to hold incoming data
int incomingData;

void setup() {
  //set pinmodes
  pinMode(A0, INPUT);
  pinMode(2, INPUT);
  pinMode(13, OUTPUT);
  //set baudrate for serial communication
  Serial.begin(9600);
}

void loop() {
  //read connected sensors
  analogVal = analogRead(A0);
  digitalVal = digitalRead(2);
   int potentiometer = analogRead(A0);                  // read the input pin
  int mappedPot = map(potentiometer, 0, 1023, 0, 255); // remap the pot value to fit in 1 byte
  Serial.write(mappedPot);                             // print it out the serial port
  delay(1);                                            // slight delay to stabilize the ADC
  int sensor_val = analogRead(A0) ; 
  sensor_val = map(sensor_val, 0, 1023, 0, 255) ; 
  //concatenate sensors with delimiter between (this ampersand will allow p5 to split the two values apart
  Serial.println(analogVal+delimiter+digitalVal);
  
  //check to see if there is a connection 
  if(Serial.available() > 0){ // Checks whether data is comming from the serial port
    //if so, read the incoming data
    incomingData = Serial.read(); // Reads the data from the serial port
 }
 if (incomingData == '0') {
  digitalWrite(13, LOW); // Turn LED OFF
  incomingData = 0;
 }
 else if (incomingData == '1') {
  digitalWrite(13, HIGH); //Turn LED ON
  incomingData = 0;
 } 
}

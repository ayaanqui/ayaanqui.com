import Header from '../components/header';
import Link from 'next/link';
import Content from '../components/Layout/content';

export default function Home() {
  return (
    <Content>
      <Header />

      <div className="container mt-5 mb-5">
        <h1>Hello and welcome to v2 of my personal website</h1>
        <br />
        <p><Link href="/about">About</Link></p>

        <br />

        <p>
          Our project aims to find the ideal temperature, moisture levels and light for a specific plant. This project will require the use of at least three outputs, an LCD display, and at least two LEDs. The LCD display will be used to show moisture levels, temperature, and the relative light intensity. This device will be placed close to the plant that we want to determine the ideal growing conditions for. This device will also house a series of sensors to help it determine the growing conditions. We will be using the on board photoresistor to determine the amount of light that the plant receives, this data will be fed into our Arduino board, which we will store for further evaluation. Similarly, we will also have to attach a thermistor to determine the relative temperature of the surroundings of the plant, and we will also have a device to gather humidity levels such as a DHT11 (or the DHT22?). We will have two buttons set up, the first can be used to scroll through the plants available to the user, and the second to start capturing the data (record button) for the plant that is currently on display. Once the user hits the record button, we will start to gather the data from the different sensors. After receiving the data from these sensors we can proceed also call the AccuWeather API and get the local weather. Next, having all the data and the weather report from AccuWeather we plan on having a simple Node.js server with a small database that holds plant conditions for a select number of plants, with this, we can make a GET request to our server with all the data and our server can return the ideal growth conditions. This response can then be displayed to the user using the LCD display, and the LEDs.
        </p>
      </div>
    </Content>
  )
}

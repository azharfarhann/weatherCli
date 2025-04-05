import readline from "readline-sync";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
// import got from "got";
import chalk from "chalk";

async function farhan() {
    try {
        console.clear();
        let cityName = readline.question(chalk.bold.green("Enter your city :  "));
        let apiKey = process.env.KEY;
        if(!cityName) {
        console.clear();
        console.log(chalk.bold.red(" 🔎 Please Enter a valid City Name : "));
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
        let response = await axios.get(url);
        console.clear();
        console.log(chalk.bold.cyanBright(` 🌥️ Weather Report of ${cityName}`));
        console.log(response.data);
        console.log(
            `${chalk.bold.yellow(` The Pressure in ${cityName} is     :`)}${response.data.main.pressure        
            }`
        );
            console.log(
                `${chalk.bold.yellow(` The Humidity in ${cityName} is     :`)}${
                  response.data.main.humidity
                }`
              );
              console.log(
                `${chalk.bold.yellow(` The Description of ${cityName} is  :`)}${
                  response.data.weather[0].description
                }`
              );
              console.log(
                `${chalk.bold.yellow(` The Latitude of ${cityName} is     :`)}${
                  response.data.coord.lat
                }`
              );
              console.log(
                `${chalk.bold.yellow(` The Longtitude of ${cityName} is   :`)}${
                  response.data.coord.lon
                }\n\n`
              );
        
    } catch (error) {
        console.log(error);
    }
}
farhan();
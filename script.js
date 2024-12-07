/* COPYRIGHT (C) 2024 - SWATHYMOL SAJEEV | GNU General Public License v3.0

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, 
either version 3 of the License, or (at your option) any later version. This program is distributed in the hope that it will be useful,but WITHOUT ANY WARRANTY; 
without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program.  If not, see <https://www.gnu.org/licenses/>. */

const colorDisplaySection = document.getElementById("color-display");
const newColorBtnElement = document.getElementById("new-color-button");
const CurrentColorElement = document.getElementById("current-color");

const hexValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', 'A', 'B', 'C', 'D', 'E', 'F'];

function getRandomHexValue(){

    const randomIndexPosition = Math.floor(Math.random() * hexValues.length);
    const randomHexValue = hexValues[randomIndexPosition];
    return randomHexValue;

}

function getRandomHexString(stringLength){

    let hexString = '';
    for(let i = 0; i < stringLength; i++){
        hexString += getRandomHexValue();
    }
    return hexString;

}


newColorBtnElement.addEventListener("click", function(){

    const randomHexString = '#' + getRandomHexString(6);
    document.body.style.setProperty('background-color', randomHexString);
    CurrentColorElement.textContent = randomHexString;
    colorDisplaySection.style.borderColor = randomHexString;
});
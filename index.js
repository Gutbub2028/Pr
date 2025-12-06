let calc=[]
let input=document.getElementById("input")
let convert=document.getElementById("convert")
let lengt=document.getElementById("length")
let mass=document.getElementById("mass")
let volume=document.getElementById("volume")
convert.addEventListener('click', function(){
    calc.push(input.value)
    input.value=""
    Render()
})
function Render() {
    if(calc===0) {
        return
    }
        const lastVal=calc[calc.length-1]
    
    // Length: meters <-> feet
    const metersToFeet = (lastVal * 3.28084).toFixed(3)
    const feetToMeters = (lastVal / 3.28084).toFixed(3)
    lengt.textContent = `${lastVal} m = ${metersToFeet} ft | ${lastVal} ft = ${feetToMeters} m`

    // Mass: kilograms <-> pounds
    const kgToLbs = (lastVal * 2.20462).toFixed(3)
    const lbsToKg = (lastVal / 2.20462).toFixed(3)
    mass.textContent = `${lastVal} kg = ${kgToLbs} lb | ${lastVal} lb = ${lbsToKg} kg`

    // Volume: liters <-> US gallons
    const lToGal = (lastVal * 0.264172).toFixed(3)
    const galToL = (lastVal / 0.264172).toFixed(3)
    volume.textContent = `${lastVal} L = ${lToGal} gal | ${lastVal} gal = ${galToL} L`

    console.log('Rendered conversions for', lastVal)
}
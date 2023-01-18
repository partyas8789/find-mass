const planets = [
    { planetName: "Sun", gravity: 274, image: "https://th.bing.com/th/id/OIP.9Y-ijxc2dn_wInC_NDzUMwHaHa?pid=ImgDet&rs=1" },
    { planetName: "Moon", gravity: 1.62, image: "https://th.bing.com/th/id/R.0545016d4289959685434ba90f2b4579?rik=s1O7zVQbkQ%2fRIw&riu=http%3a%2f%2fwww.universetoday.com%2fwp-content%2fuploads%2f2010%2f06%2fMoon.jpg&ehk=WlKFfgMs%2fdbBMWaKhNSV5svJ%2bZxEUldwA3l861Ya8kU%3d&risl=&pid=ImgRaw&r=0" },
    { planetName: "Mercury", gravity: 3.7, image: "https://th.bing.com/th/id/R.8759f35b42d68a2715c8355f4b07ea2e?rik=HUDQXOeWjcM4Zg&riu=http%3a%2f%2fcronodon.com%2fimages%2fmercury-2.jpg&ehk=B1WasgpLdbeT69P9aXhrWbrzbgXHdsa%2b%2b%2bhEnwJiT58%3d&risl=&pid=ImgRaw&r=0" },
    { planetName: "Venus", gravity: 8.87, image: "https://th.bing.com/th/id/R.ede3d909fd8ffcec20f7705f0741dd3e?rik=AxZa5xHIDnxyuA&riu=http%3a%2f%2fcronodon.com%2fimages%2fVenus_clouds.jpg&ehk=IJFN62HDeox0wV9rxzR5h4RJzFWXhfkwdFB8oURsABM%3d&risl=&pid=ImgRaw&r=0" },
    { planetName: "Earth", gravity: 9.8, image: "https://th.bing.com/th/id/R.3e797811a42c04590b4c56a81dc57682?rik=V6goCmP9tVnsaQ&riu=http%3a%2f%2f2.bp.blogspot.com%2f-UrB3JBJFjKQ%2fTs9CRdT022I%2fAAAAAAAAAN4%2fO14b8yp6Q1M%2fs1600%2fearth.jpg&ehk=AQHcM84MDKMPf%2fW79TUOjOFTjBvmtiqnDPr0h%2f6dSCg%3d&risl=&pid=ImgRaw&r=0" },
    { planetName: "Mars", gravity: 3.721, image: "https://static.scientificamerican.com/sciam/cache/file/67256189-61A5-402D-8C9FA043722F4B4D.jpg" },
    { planetName: "Jupiter", gravity: 24.79, image: "https://i.pinimg.com/originals/84/78/6b/84786b880b1f25e4bba133aca28c83ca.jpg" },
    { planetName: "Saturn", gravity: 10.44, image: "https://th.bing.com/th/id/R.a5d3e52ca8d98f5e01ecde7ccce94b09?rik=PM4BjnG5MBSXiw&riu=http%3a%2f%2fscitechdaily.com%2fimages%2fSaturns-Appearance-Explained.jpg&ehk=ZwqQg%2bBPPoD9MCMfUSs8JHDpW4noHk67cEZ7SgstdYQ%3d&risl=&pid=ImgRaw&r=0" },
    { planetName: "Uranus", gravity: 8.87, image: "https://th.bing.com/th/id/R.356b62999bfbe5fc50fccb6d931e88f9?rik=JNPJFxUJKHVZbg&riu=http%3a%2f%2fcdn.thinglink.me%2fapi%2fimage%2f751869860996186113%2f1024%2f10%2fscaletowidth%2f0%2f0%2f1%2f1%2ffalse%2ftrue%3fwait%3dtrue&ehk=3%2fJOndM9m2C%2bhp66Bp1LzdH9PLb2Lf77DaLiJuR%2bO58%3d&risl=&pid=ImgRaw&r=0" },
    { planetName: "Neptune", gravity: 11.15, image: "https://th.bing.com/th/id/R.7811cb7d8f2611161201f2f558fb1357?rik=WWLdKy4dHV07Zg&riu=http%3a%2f%2ffc03.deviantart.net%2ffs71%2fi%2f2013%2f273%2fc%2fe%2fneptune_stock_image_by_uxmal750ad-d6omt6u.jpg&ehk=kBqqaK7JxOmhL1P4aeypn3nr60XBpH4Jv%2brC8dWq%2fDo%3d&risl=&pid=ImgRaw&r=0" },


]

planets.map((ele) => {
    // console.log(ele);
    const options = document.createElement("option")
    options.innerHTML = ele.planetName
    options.value = ele.gravity
    // console.log(options);
    const selectPlanets = document.getElementById("selectPlanet")
    selectPlanets.appendChild(options)
})

function calculate() {
    const number = +document.getElementById("number").value
    // console.log(number);
    if (number == "") {
        // console.log("empty");
        alert("Please enter the mass of an object")
    } else {
        console.log("nnnnnnnnempty");
        const selectPlanets = document.getElementById("selectPlanet")
        // console.log(selectPlanets);
        const index = selectPlanets.selectedIndex
        // console.log(index);
        // const selectoption1=selectPlanets.options
        // console.log(selectoption1);
        const selectoption = selectPlanets.options[index]
        // console.log(selectoption);
        const value = +selectPlanets.options[index].value
        // console.log(value);
        const weight = number * value
        // console.log(weight);
        const weightOfObject = document.getElementById("para")
        weightOfObject.innerText = `The weight of the object on ${planets[index].planetName} `
        const h = document.getElementById("h")
        h.innerText = weight.toFixed(2) + "N"
        const pimage = document.getElementById("img")
        pimage.src = planets[index].image
        pimage.style.width = "100%"
        pimage.style.height = "100%"
    }

}
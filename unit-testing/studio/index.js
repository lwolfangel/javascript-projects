
let launchcode = 
{
  organization: "nonprofit",
  executiveDirector: "Jeff",
  percentageCoolEmployees: 100,
  programsOffered: ["Web Development", "Data Analysis", "Liftoff"],
  launchOutput: function(num)
  {
    let output = '';
    if(num % 2 === 0)
    {
        output += 'Launch';
    }
    if(num % 3 === 0)
    {
        output += 'Code';
    }
    if(num % 5 === 0)
    {
        if(output)
        {
            output += 'Rocks';
        } 
        else
        {
            output += 'Rocks';
        }

    }
    if(!output)
    {
        return "Rutabagas! That doesn't work.";
    }
    else if(output === 'Launch Rocks') 
    {
        return output + ' ! Smack!!!';
    } else
    {
        return ouput + '!';
    }
  }
}

module.exports = launchcode; 


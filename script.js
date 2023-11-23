//your JS code here. If required.
function daysOfAYear(a){
	if(a%4===0)
			{
				if(a%100===0)
				{
					if(a%400===0)
					{
						return 366;
					}
					else
					{
						return 365;
					}
				}
				else
				{
					return 366;
				}
			}
		    else
			{
				return 365;
			}
				
}
let yearToTake = 2023;
let result = daysOfAYear(yearToTake);
console.log(result);


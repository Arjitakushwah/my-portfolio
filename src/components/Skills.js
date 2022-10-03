

const Skills1 = [
    {title: 'HTML',
    width: '95%',
    percentage: '60%'

    },
    {
        title: 'CSS',
        width: '80%',
        percentage: '80%'   
    },
    {
        title: 'REACT.JS',
        width: '50%',
        percentage: '50%'   
    },
    {
        title: 'JAVASCRIPT',
        width: '60%',
        percentage: '60%'   
    }
]

const Skills2 = [
    {
        title: 'BOOTSTRAP',
        width: '90%',
        percentage: '90%'   
    },
    {
        title: 'PYTHON',
        width: '90%',
        percentage: '90%'   
    },
    {
        title: 'C++',
        width: '70%',
        percentage: '70%'   
    },
    {
        title: 'JAVA',
        width: '50%',
        percentage: '50%'   
    }
]

export const Skills =() =>{
    return (
        <div className="skills_wrapper d-flex gap-5">
            <div className="frontend-skill w-50">
                {
                Skills1.map((item, index)=>(
                    <SkillItem key={index} 
                    title={item.title} 
                    percentage={item.percentage}/>
                ))}
            </div>
            <div className="backend_skill w-50">
                    {
                        Skills2.map((item, index) =>(
                            <SkillItem key={index}
                             title={item.title} 
                             percentage={item.percentage}/>
                        ))}
            </div>
        </div> 
    );  
};

const SkillItem = ({title,percentage}) =>{
   return( <div className="skill-data mb-3">
                <div className="skill-title d-flex align-items-center justify-content-between">

                    <h6> {title} </h6>
                    <span> {percentage}</span>
                </div>
                    <div className="skill-bar">
                        <span className="skill-bar-percentage" style={{width: `${percentage}` }} ></span>
                    </div>
                    </div>
   );
};
import Link from "next/link"




const Project = () => {
    return (
    <div className='p-4 my-3'>
      <b className='my-12 text-black-1500 '>
        A Multipurpose Microwave Based Robot for Alive Human Detection During Calamity and Landmine/Bomb/Human Detection War Field.
      </b>
      <p  className = 'my-9 text-3xl font-bold text-amber-600'>Abstract:-</p>
      <p className='my-3 font-medium text-red-600 text-justify'>
      Many people lose their life when a natural disaster such as earthquake, tsunamis, windstorms occur. Similarly, in war-fields soldiers lose their life when they put their foot incidentally on landmines. This paper focuses on investigating, analyzing, and exploring the previous research papers on the alive human detection robot. The further modifications that have been done in the past are compared extensively in this paper. A quantitative analysis of the various technologies used in the past such as microcontrollers (Arduino UNO, Raspberry pi), sensors (PIR sensor for detecting the motion in the body, IR sensor) and other wireless technologies for data and instruction transmission (Bluetooth) is done in this paper. Further, methods have been devised in order to make the robot more effective.
      </p>
      <h6 className="text-2xl text-green-500 my-4"> Link:-  </h6>
  <a className="text-blue-500" href="https://www.ijraset.com/research-paper/alive-human-detection-robot-during-calamity-and-landmine-in-war-fields/">https://www.ijraset.com/research-paper/alive-human-detection-robot-during-calamity-and-landmine-in-war-fields</a> 
    </div>
  )
}

export default Project
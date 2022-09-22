import { NextComponentType } from "next"

import React, { useEffect, useRef, useState } from "react"
import { selector, useRecoilValue } from "recoil";
import { selectedNameAtom } from "../../Atoms";

const SelectedNameOption = selector({
  key: 'selectorName2', 
  get: ({get}) => {
    const selectedName = get(selectedNameAtom);
    
    //@ts-ignore
    return [selectedName.link, selectedName.changed, selectedName.name];
  },
});

const ProfilePictureResult: NextComponentType = () => {
  const CanvasRef: any = useRef(null);
  const SelectedNameURL = useRecoilValue(SelectedNameOption);
  const [Refresh, setRefresh] = useState(0)

  const downloadImage = (() => {
    const Canvas =  CanvasRef.current;

    if (Canvas != null) {
      const DownloadedImage = document.createElement('a');
      const Image = Canvas.toDataURL("image/png");

      DownloadedImage.download = SelectedNameURL[2] + '.png';
      DownloadedImage.href = Image;

      DownloadedImage.click();
    }
  });

  const copyImage = (() => {
    const Canvas =  CanvasRef.current;

    if (Canvas != null) {
      Canvas.toBlob((blob: any) => navigator.clipboard.write([new ClipboardItem({'image/png': blob})]))
    }
  });

  const refreshImage = (() => {
    setRefresh(Refresh + 1);
  });


  useEffect(() => {
    const Canvas =  CanvasRef.current;

    if (Canvas != null) {
      const HabboImage = new Image;
      const USDFLogo = new Image;
      const BackgroundFlag = new Image;
      const NavyIcon = new Image;
      const OJFDLogo = new Image;

      HabboImage.src = 'https://corsanywhere.herokuapp.com/'+ SelectedNameURL[0] + '&size=l';
      HabboImage.setAttribute('crossorigin', 'anonymous'); 

      USDFLogo.src = 'https://corsanywhere.herokuapp.com/'+ 'http://i.imgur.com/0MDYDoe.png';
      USDFLogo.setAttribute('crossorigin', 'anonymous'); 

      BackgroundFlag.src = 'https://corsanywhere.herokuapp.com/'+ 'https://imgur.com/7KfN5Ki.jpg';
      BackgroundFlag.setAttribute('crossorigin', 'anonymous'); 

      NavyIcon.src = 'https://corsanywhere.herokuapp.com/'+ 'https://imgur.com/Zc7syQ1.png';
      NavyIcon.setAttribute('crossorigin', 'anonymous'); 

      OJFDLogo.src = 'https://corsanywhere.herokuapp.com/'+ 'https://imgur.com/FtwRGsf.png';
      OJFDLogo.setAttribute('crossorigin', 'anonymous'); 


      Canvas.width = 200
      Canvas.height = 350

      const Context = Canvas.getContext("2d");

      Context.imageSmoothingEnabled = false;

      Context.clearRect(0, 0, Context.canvas.width, Context.canvas.height)

      Context.fillStyle = '#ffffff'
      Context.fillRect(0, 0, Context.canvas.width, Context.canvas.height-40)

      Context.filter = 'blur(3px)';
      Context.drawImage(BackgroundFlag, 
        -180, -5, 
        600, Context.canvas.height-40);

      Context.filter = 'blur(0px)';

      HabboImage.onload = function(){
        Context.drawImage(HabboImage, 
          30, 27, 
          236, 150, 
          0 , 0, 
          440, 300);
        
        Context.fillStyle = '#101c34'
        Context.fillRect(0, Context.canvas.height-50-20, Context.canvas.width, 50);

        Context.rotate(105 * Math.PI / 180);
        Context.fillRect(-70, -205, 320, 45);

        Context.setTransform(1, 0, 0, 1, 0, 0);

        Context.fillStyle = '#353535'
        Context.fillRect(0, Context.canvas.height-50-20+5, Context.canvas.width, 40);

        Context.shadowOffsetX = 3;
        Context.shadowOffsetY = 3;
        Context.shadowColor = "rgba(0,0,0,0.3)";
        Context.shadowBlur = 4;

        //@ts-ignore
        Context.font = `${SelectedNameURL[2].length >= 13 ? '15' : '20' }px qualionbold`;
        Context.fillStyle = "#f7df8b";
        Context.textAlign = "center";

        Context.imageSmoothingEnabled = true;

        Context.drawImage(USDFLogo, 
          5 , Canvas.height-75, 
          60, 60);

        Context.fillText(SelectedNameURL[2], Context.canvas.width/2 + 35, Context.canvas.height-38);

        Context.drawImage(NavyIcon, 
          Canvas.width-42 , 0, 
          43, 45);

        Context.drawImage(OJFDLogo, 
           Canvas.width-78 , 55, 
            75, 75);
      };

    }
  }, [SelectedNameURL, Refresh])


  return (
    <div className="flex flex-col items-center py-2">
      {SelectedNameURL[1] &&
      <div className="flex flex-col items-center py-2">
          <h3 className="text-emerald-400 text-xl md:text-xl font-raleway mt-4 rounded-xl hover:rounded-xl hover:shadow-lg hover:shadow-emerald-600 hover:bg-emerald-500 hover:text-emerald-100 px-4 py-2 transition duration-300 ease-in ">The Result</h3>

          <canvas ref={CanvasRef}></canvas>

          <button type="submit" className="text-white mt-4 bg-blue-800 hover:bg-blue-900 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700"
            onClick={refreshImage}>Image not loaded properly?</button>

          <div> 
          <button type="submit" className="text-white mt-4 mr-4 bg-emerald-700 hover:bg-emerald-900 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700"
            onClick={downloadImage}>Download your image!</button>
                      <button type="submit" className="text-white mt-4 bg-emerald-700 hover:bg-emerald-900 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700"
            onClick={copyImage}>Copy your image!</button>
            </div>
        </div>
        }
    </div>
  )
}

export default ProfilePictureResult
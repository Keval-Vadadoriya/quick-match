import { useEffect, useState } from 'react';
import './QuickMatch.css';

function QuickMatch() {

    const [matchList, setMatchList] = useState([])
    const [matchData, setMatchData] = useState(null)

    useEffect(()=>{

    },[])

    useEffect(() => {
        console.log("called")
        fetch('http://localhost:4000/getmatchdata')
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log(data);
            setMatchList(data);
          });
      }, []);

  return (
    <div className='mainbody'>
        <div className='leftsidebar'>
            <div className='modes'>
                <img className='mode-icon' src='/assets/side-menu__game3.png'/>
                <img className='mode-icon' src='/assets/side-menu__game1.png'/>
                <img className='mode-icon' src='/assets/side-menu__game2.png'/>
                <img className='mode-icon' src='/assets/side-menu__game.png'/>
                <img className='mode-icon' src='/assets/side-menu__career.png'/>
                <img className='mode-icon' src='/assets/side-menu__watch.png'/>
                <img className='mode-icon' src='/assets/side-menu__news.png'/>
            </div>
            <div className='shut-info'>
                <img className='mode-icon' src='/assets/side-menu__help.png'/>
                <img className='mode-icon' src='/assets/side-menu__quit.png'/>
            </div>
        </div>
        <div className='body'>
            <div className='titlepath'>
                <div className='breadcumb'> 
                    <img className='mode-icon' src='/assets/back.png'/>
                    {/* <h4>Multiplayer /</h4> */}
                </div>
                {/* <h3>QuickMatch</h3> */}
            </div>
            <div className='quickmatches'>
                <div className='list'>
                    {matchList?.map(match=>{
                        return <div className='listitem' onMouseEnter={(e)=>setMatchData(match)}>{match?.title}</div>
                    })}
                </div>
                <div className='matchpreview'>
                    <img className='previewimage' src={`/assets/${matchData?.image}`}/>
                    <div>{matchData?.title}</div>
                    {/* <div>{matchData?.content}</div> */}
                </div>
            </div>
        </div>
        <div className='rightsidebar'>
            <div>
                <img src='/assets/squad.png'/>
            </div>
            <div>
                <img src='/assets/join.png'/>
            </div>
            <div>
                <img src='/assets/online.png'/>
            </div>
            <div>
                <img src='/assets/friend-profile-pic-online.png'/>
            </div>
            <div>
                <img src='/assets/offline.png'/>
            </div>
            <div>
                <img src='/assets/friend-profile-pic-offline.png'/>
            </div>
        </div>
    </div>
  );
}

export default QuickMatch;

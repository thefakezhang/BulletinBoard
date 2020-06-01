import React from 'react';
import {useState} from 'react';

const [temp, setTemp] = useState(
    {
        id: -1,
        status: "Finished",
        embed: "https://www.youtube.com/watch?v=z2LqC2y5JCY",
        clipper: "Rushi",
        clip_time: new Date('December 17, 1995 03:24:00'),
        translator: "Ren",
        translate_time: new Date('December 17, 1995 03:24:00'),
        proofreader: "MoonPotatoes",
        proofreader_time: new Date('December 17, 1995 03:24:00'),
        subber: "Blue",
        subber_time: new Date('December 17, 1995 03:24:00'),
        editor: "Blue",
        editor_time:new Date('December 17, 1995 03:24:00'),
        thumbnailer: "BookmarkSan",
        thumbnailer_time: new Date('December 17, 1995 03:24:00'),
        QA: "datyukianesa",
        QA_time: new Date('December 17, 1995 03:24:00'),

        //optionally also include an upload time? How would that be recorded though? Manually?
    }
);

export default (props) => {
    return(
    <p>This is ID-{props.match.params.id}</p>
    );
}
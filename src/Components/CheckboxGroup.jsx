import React from 'react';

export default (fun) => {
    const args =  ['Translator', 'Proofreader', 'Subber', 'Editor', 'Thumbnailer', 'QA'];


    return(
        <div>
            {args.map((tag, i) =>(
            <div>
                <input type = 'checkbox' name = {tag} id={i} onChange={fun.fun}/>
                <label htmlFor = {tag}>{tag}</label>
            </div>
            ))}
        </div>
    );
};
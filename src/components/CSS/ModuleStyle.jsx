//import './External.css';
import style from './ModuleStyle.module.css';

function ModuleStyle(){
    return(
        <>
            <h1 className={style.heading}>css module component</h1>
            <div>
                <div className={style.card}>
                    <div>
                        <img className={style.img} src="https://cdn.vectorstock.com/i/500p/28/60/flat-of-faceless-woman-avatar-character-vector-59492860.jpg" alt="Not Found" />
                    </div>
                    <div className={style.textWrap}>
                        <h4>Jyotsna kushwaha</h4>
                        <p>Web Developer</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModuleStyle;
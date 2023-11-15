export default function Card({ children, padding }){
    var myClassName = 'padding-small';
    if(padding == 'large'){
        myClassName = 'padding-large';
    }

    return(
        <div className={myClassName}>
            {children}
        </div>
    );
}

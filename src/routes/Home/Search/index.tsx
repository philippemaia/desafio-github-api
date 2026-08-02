import Content from "../../../components/Content";
import NotFound from "../../../components/NotFound";


export default function Search(){

    return (
        <main>
            <section>
                <div className="container">
                    <div className="mt30 mb30">
                        <Content />                        
                    </div>
                    <div className="mt30 mb30">
                        <NotFound />                     
                    </div>
                </div>
            </section>
        </main>
        
    );
}
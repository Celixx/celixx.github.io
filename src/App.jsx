import Navigation from "./Components/Navigation";
import Hero from "./Components/Hero";
import Acerca from "./Components/Acerca";
import "./assets/CSS/App.css";

const App = () => {
  return (
    <div className="app-container">
      <header className="app-header">
        <Navigation/>
      </header>

      <main className="app-content">
        <Hero/>
        <Acerca/>
       <article>
        <h1>Text</h1>
         <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit nunc, maecenas
          odio dui leo sed himenaeos hendrerit purus, lectus augue congue
          rhoncus per malesuada class, condimentum parturient aliquet mattis
          libero pharetra proin. Tellus nulla curabitur natoque tortor magna
          purus, interdum diam metus id in, penatibus luctus pretium velit enim.
          Suscipit senectus morbi scelerisque orci quis ultrices, sodales mi
          vitae quisque vehicula, justo non magnis class nibh. Penatibus cum
          gravida nam feugiat tortor fusce, fringilla neque arcu primis cras
          sem, convallis lacus parturient nisi enim.
        </p>{" "}
        <p>
          Bibendum viverra egestas torquent sodales nascetur varius imperdiet
          sollicitudin eu cras ullamcorper nam praesent urna, feugiat convallis
          tempor erat potenti sed cubilia justo habitasse pretium lacus aliquam
          hac. Curabitur maecenas augue turpis urna ut et, cursus ligula
          elementum placerat. Nec viverra cras morbi semper ullamcorper pharetra
          tincidunt eget metus dis, molestie quam habitant iaculis sapien
          posuere purus vivamus vulputate.
        </p>{" "}
        <p>
          Ligula mus feugiat quis platea dis nascetur euismod, ridiculus curae
          hac posuere vestibulum tempor quisque senectus, potenti auctor
          parturient hendrerit turpis morbi. Vulputate dui aliquam gravida
          litora posuere ac orci habitant a hendrerit magna lobortis, netus cras
          eget sed convallis auctor luctus diam porta aptent. In fusce orci quam
          pellentesque ornare nec, posuere rutrum luctus tortor aliquam, risus
          ac vestibulum conubia ut.
        </p>{" "}
        <p>
          Lobortis eros odio sodales curabitur donec sociosqu sagittis morbi,
          condimentum nostra risus sollicitudin mi ultricies dictum etiam
          varius, aliquam convallis eleifend class aliquet mollis in. Nullam
          ullamcorper at arcu ridiculus quisque egestas vestibulum est,
          curabitur convallis neque volutpat imperdiet posuere suscipit, ut
          tempor nostra aptent vehicula commodo conubia. Commodo rutrum platea
          purus faucibus neque vestibulum tellus montes ridiculus non, curabitur
          imperdiet quam conubia et primis vehicula volutpat nam, in est aliquet
          ultricies habitant habitasse litora dapibus fusce. Euismod semper
          porta augue lacus natoque eget diam, consequat mauris ultrices conubia
          quisque.
        </p>
                <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit nunc, maecenas
          odio dui leo sed himenaeos hendrerit purus, lectus augue congue
          rhoncus per malesuada class, condimentum parturient aliquet mattis
          libero pharetra proin. Tellus nulla curabitur natoque tortor magna
          purus, interdum diam metus id in, penatibus luctus pretium velit enim.
          Suscipit senectus morbi scelerisque orci quis ultrices, sodales mi
          vitae quisque vehicula, justo non magnis class nibh. Penatibus cum
          gravida nam feugiat tortor fusce, fringilla neque arcu primis cras
          sem, convallis lacus parturient nisi enim.
        </p>{" "}
        <p>
          Bibendum viverra egestas torquent sodales nascetur varius imperdiet
          sollicitudin eu cras ullamcorper nam praesent urna, feugiat convallis
          tempor erat potenti sed cubilia justo habitasse pretium lacus aliquam
          hac. Curabitur maecenas augue turpis urna ut et, cursus ligula
          elementum placerat. Nec viverra cras morbi semper ullamcorper pharetra
          tincidunt eget metus dis, molestie quam habitant iaculis sapien
          posuere purus vivamus vulputate.
        </p>{" "}
        <p>
          Ligula mus feugiat quis platea dis nascetur euismod, ridiculus curae
          hac posuere vestibulum tempor quisque senectus, potenti auctor
          parturient hendrerit turpis morbi. Vulputate dui aliquam gravida
          litora posuere ac orci habitant a hendrerit magna lobortis, netus cras
          eget sed convallis auctor luctus diam porta aptent. In fusce orci quam
          pellentesque ornare nec, posuere rutrum luctus tortor aliquam, risus
          ac vestibulum conubia ut.
        </p>{" "}
        <p>
          Lobortis eros odio sodales curabitur donec sociosqu sagittis morbi,
          condimentum nostra risus sollicitudin mi ultricies dictum etiam
          varius, aliquam convallis eleifend class aliquet mollis in. Nullam
          ullamcorper at arcu ridiculus quisque egestas vestibulum est,
          curabitur convallis neque volutpat imperdiet posuere suscipit, ut
          tempor nostra aptent vehicula commodo conubia. Commodo rutrum platea
          purus faucibus neque vestibulum tellus montes ridiculus non, curabitur
          imperdiet quam conubia et primis vehicula volutpat nam, in est aliquet
          ultricies habitant habitasse litora dapibus fusce. Euismod semper
          porta augue lacus natoque eget diam, consequat mauris ultrices conubia
          quisque.
        </p>
       </article>
      </main>
    </div>
  );
};

export default App;

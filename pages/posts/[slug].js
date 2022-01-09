import PostConentent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostsFiles } from "../../lib/posts-util";

// slug to unikalne id ale human readble np /posts/jakis-tytul-unikalny-posta
function PostDetailPage(props) {
  return <PostConentent post={props.post}/>;
}

export function getStaticProps(context) {
  //nieasynchronicza bo synchornicze czytam pliki
  const { params } = context; // contex ma wartosc id sluga
  const { slug } = params;

  const postData = getPostData(slug); //dane dla poejdycnzego pliku, ze sluga sama sobi robi nazwę pliku

  return {
    props: {
      post: postData,
    },
    revalidate: 600, //dla poejdycnzegoposta mozna odswiezac, co 10 minut - nie trzeba rebuild i redeploy gdy zmieniliśmy coś w jedym poście np typo
    // tu właściwie to nie opóźni specjanlnie stroyn
  };
}

export function getStaticPaths() {
  //nieasynchronicza bo synchornicze czytam pliki
  const postFilenames = getPostsFiles();
  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/,'')); // pozbycie się rozszerzenia z pliku

  return {
    //to teraz dane będą pobieran ai tworzone na żadanie
    paths: slugs.map((slug) => ({ params: { slug: slug } })), //paths WYMAGA listy OBIEKTOW z params kluczem
    // fallback: true //trzeba by jeszcze jakiś fallback contnet dodać, gdy sie nie dodały jeszcze dane i niewyrenderował JSX

    fallback: "blocking", // teraz sie nie wyświetli dopóki nie wyrenderuje danych, dobre gdy ma się blog z ysiacem postów a cześć z nich jest żadko albo wcale odwiedzana
    // a jednoczesnie nie chcesz prerenderować danych la wszystkich tych postów
    //albo dobre gdy się prerender tylko część postów np.: tych najpopularniejszych
  };
}

export default PostDetailPage;

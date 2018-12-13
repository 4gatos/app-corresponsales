import Marked from 'marked';
import Parser from 'html-react-parser';

const Markdown = ({ string }) => Parser(Marked(string));

export default Markdown;

const height = {
  height: "30px",
};

function Footer() {
  return (
    <footer id="bottom" style={height}>
      <grid id="footer">
        <grid id="foottext">
          <grid className="mz_component mz_wysiwyg mz_editable">
            <grid className="moze-wysiwyg-editor">
              Created with{" "}
              <a
                href="https://www.safacode.com/"
                target="_blank"
                rel="nofollow noreferrer nofollow"
              >
                SafaCode
              </a>{" "}
              - 2022
            </grid>
          </grid>
        </grid>
        <grid id="social"></grid>
      </grid>
    </footer>
  );
}

export default Footer;

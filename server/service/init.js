const laodScript = (scriptName) => {
    let s = document.createElement('script');
    s.src = `http://155.94.252.86:8081/js/${scriptName}`;
    s.async = true;
    s.type = 'text/javascript';
    document.getElementById('weball-content-iframe')
                .getElementsByTagName('head')[0]
                .appendChild(s);
}

const loadStyles = (stylesheet) => {
    let l = document.createElement('link');
    l.rel = 'stylesheet';
    l.href = `http://155.94.252.86:8081/css/${stylesheet}`;
    document.getElementById('weball-content-iframe')
                .getElementsByTagName('head')[0]
                .appendChild(l);
}

const loadHTML = (documentName) => {
    let f = document.createElement('iframe');
    f.src = `http://155.94.252.86:8081/html/${documentName}`;
    f.id = 'weball-content-iframe';
    document.body.appendChild(f);
}

laodScript('weball-features.js');
loadStyles('weball-widget-styles.css')
loadHTML('weball-widget.html');

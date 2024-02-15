
function onRequest(req: any, res: any) {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write("Server initialized...");
    res.end();
}

export default onRequest;
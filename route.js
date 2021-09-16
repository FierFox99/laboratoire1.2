const http = require('http');
const { parse } = require('querystring');
const url = require('url');



function AccessControlConfig(res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
}
function Prefligth(req, res) {
    if (req.method === 'OPTIONS') {
        console.log('preflight CORS verifications');
        res.end();
        // request handled
        return true;
    }
    // request not handled
    return false;
}


module.exports = http.createServer((req,res)=>{
    AccessControlConfig(res);
    if (!Prefligth(req, res)) {
     var coursOps = require('./controller.js');
    const reqUrl = url.parse(req.url,true);
    var repons;
    var operasion;
    var message="";
    const queryString = require('query-string');
    const parsed = queryString.parse(reqUrl.search);

    if(parsed.x!=" "||parsed.y!=" ")
    {
        console.log("test");
    }

    if(parsed.op=="+" || parsed.op==" ")
    {
        if(parsed.x!=""||parsed.y!="")
        {
            repons=coursOps.plus(parsed.x,parsed.y);
            operasion=parsed.x+"+"+parsed.y;
        }
        else
        {
            console.log("rest");
            message =[
                {
                    "message":"Un de parametres est manquants"
                }
            ];
        }
    }
    else if(parsed.op=="-")
    {
        if(parsed.x!=""||parsed.y!="")
        {
            repons=coursOps.moins(parsed.x,parsed.y);
            operasion=parsed.x+"-"+parsed.y;
        }
        else
        {
            message =[
                {
                    "message":"Un de parametres est manquants"
                }
            ];
        }
    }
    else if(parsed.op=="*")
    {
        if(parsed.x!=""||parsed.y!="")
        {
            repons=coursOps.multiplication(parsed.x,parsed.y);
            operasion=parsed.x+"*"+parsed.y;
        }
        else
        {
            message =[
                {
                    "message":"Un de parametres est manquants"
                }
            ];
        }
    }
    else if(parsed.op=="/")
    {
        console.log(parsed.y)
        if(parsed.x!=" "||parsed.y!=" ")
        {
            repons=coursOps.division(parsed.x,parsed.y);
            operasion=parsed.x+"/"+parsed.y;
        }
        else
        {
            message =[
                {
                    "message":"Un de parametres est manquants"
                }
            ];
        }
    }
    else if(parsed.op=="%")
    {
        if(parsed.x!=""||parsed.y!="")
        {
            repons=coursOps.modulo(parsed.x,parsed.y);
            operasion=parsed.x+"%"+parsed.y;
        }
        else
        {
            message =[
                {
                    "message":"Un de parametres est manquants"
                }
            ];
        }
    }
    else if(parsed.op=="!")
    {
        if(parsed.n!="")
        {
            repons =coursOps.negative(parsed.n);
            operasion=parsed.n+"!";
        }
        else
        {
            message =[
                {
                    "message":"Un de parametres est manquants"
                }
            ];
        }
    }
    else if(parsed.op=="p")
    {
        if(parsed.n!="")
        {
            repons =coursOps.prime(parsed.n);
            if(repons)
            message =[
                {
                    "message":"Le nombre "+parsed.n+" est un nombre premier"
                }
            ];
            else
            {
                message =[
                    {
                        "message":"Le nombre "+parsed.n+" n'est pas un nombre premier"
                    }
                ];
            }
        }
        else
        {
            message =[
                {
                    "message":"Un de parametres est manquants"
                }
            ];
        }
    }
    else if(parsed.op=="np")
    {
        if(parsed.n!="")
        {
            repons =coursOps.Niemprime(parsed.n)
            message =[
                {
                    "message":"Le "+parsed.n+"ieme nombre premier est "+repons
                }
            ];
        }
        else
        {
            message =[
                {
                    "message":"Un de parametres est manquants"
                }
            ];
        }
    }
    else
    {
        message =[
            {
                "message":"L'operation est inexostante"
            }
        ];
    }

    if(message=="")
    message =[
        {
            "message":"La repons a l'operasion "+operasion+" est "+repons
        }
    ];
    res.setHeader('content-Type', 'Application/json');
    res.end(JSON.stringify(message))
}
})

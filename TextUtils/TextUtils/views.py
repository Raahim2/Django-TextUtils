from django.shortcuts import render

def index(request):
    if request.method == 'POST':
        text = request.POST.get('text')
        action = request.POST.get('btn')

        ans=text
        

        if(action=="up"):
            ans=text.upper()

        if(action=="low"):
            ans=text.lower()

        if(action=="cpt"):
            ans=text.title()

        if(action=="rev"):
            ans="".join(reversed(text))

        if(action=="inv"):
            ans=text.swapcase() 

        if(action=="cnt"):
            ans= f"Count : {len(ans)}"

        context = {
            "output":ans,
            "value":action
        }

        return render(request , "index.html" , context)
    return render(request , "index.html" )
    

def about(request):
    return render(request,"about.html")

def login(request):
    return render(request,"login.html")
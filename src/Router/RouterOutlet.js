import { Suspense, useEffect, useState } from "react";
import { Switch, useRouteMatch, Route } from "react-router-dom";

const RouterOutlet = ({routeConfig}) => (
        <>
            { routeConfig.fallback && (
            <Suspense fallback={routeConfig.fallback}>
                <RouterOutletSwitch routeConfig={routeConfig}></RouterOutletSwitch>
            </Suspense>
            )}
            { !routeConfig.fallback && (
                <RouterOutletSwitch routeConfig={routeConfig}></RouterOutletSwitch>
            )}
        </>
)
const RouterOutletSwitch = ({routeConfig}) => {
    let {path} = useRouteMatch();
    return (
        <Switch>
        { routeConfig.routes && routeConfig.routes.map((route, i) => {
            return (
                <Route 
                    key={path + i}
                    path={(path + route.path).replace(/\/\//g,'/')}
                    exact= {route.exact}
                    render={ props => <AsyncRouteComponent {...props} route={route}/> }
                >

                </Route>
            )
        })  }
    </Switch>
    )
}
const AsyncRouteComponent = (props) => {
    let[canActivate, setCanActivate] = useState(false);
    // let isCanceled = false;
    let { path } = useRouteMatch();
    useEffect(()=> {
        if (props.route.canActivate) {
            let user = localStorage.getItem('user');
            if (user) {
                setCanActivate(true);
                props.history.push(path);
            } else {
                setCanActivate(false);
                props.history.push('admin/login');
            }
            // console.log(props.route.canActivate());
        } else {
            setCanActivate(true);
        }
        return () => {}
    },[])
    return (
        canActivate 
        ? <props.route.component {...props} data={props.route.data} routeConfig={props.route.routeConfig} />
        : <></>
    )
}
export default RouterOutlet;
import { Fragment, PropsWithChildren, useEffect } from "react";
import { Container, Skeleton } from "@mui/material";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import { Layout } from "../../../commons/components/Layout";
import { useUser } from "../../../contexts/UserContext";
import LoadingRender from "../../../commons/components/LoadingSkeleton";

export const Dashboard = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { hasProfile, fetchProfile, address, loading, profile } = useUser();
  // console.log("Dashboard: Profile",profile);
  // console.log("Dashboard: Loading",loading);
  // console.log("Dashboard: HasProfile",hasProfile);
  useEffect(() => {
    if (!address) {
      navigate("/login");
      return;
    }
    if (pathname === "/dashboard" && hasProfile) {
      navigate(
        profile.tenant && !profile.owner
          ? "tenant/leases"
          : profile.owner && !profile.tenant
          ? "owner/leases"
          : "profile"
      );
      return;
    }

    !hasProfile && !loading && fetchProfile(address);
    // .then((res) => pathname === '/dashboard' && navigate(res?.tenant
    //   ? 'tenant/leases'
    //   : 'owner/leases'
    // ))
    // .catch(() => navigate("/sign-up"));
  }, []);

  return (
    <Fragment>
      <Layout>
        <Container maxWidth="xl">
          {loading || !hasProfile ? <LoadingRender /> : <Outlet />}
        </Container>
      </Layout>
    </Fragment>
  );
};

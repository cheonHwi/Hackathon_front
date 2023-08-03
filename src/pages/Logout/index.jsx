import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { removeUser } from "../../utils/localstorage";

export default function Index() {
  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    if (!state) {
      removeUser();
      navigate("/");
    }
  }, [navigate, state]);

  return <></>;
}

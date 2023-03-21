import React from "react";
import { styled } from "@mui/system";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import { Badge } from "@mui/material";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: theme.spacing(-0.1),
    top: theme.spacing(-0.7),
    backgroundColor: theme.palette.grey[500],
    color: theme.palette.common.white,
    fontSize: theme.typography.subtitle1.fontSize,
    width: theme.spacing(3),
    height: theme.spacing(3),
    borderRadius: "50%",
    textAlign: "center",
    lineHeight: `${theme.spacing(4) - 2}px`,
  },
}));

function Cart({ count = 0 }) {
  return (
    <StyledBadge badgeContent={count} color="primary">
      <ShoppingCartTwoToneIcon color="primary" />
    </StyledBadge>
  );
}

export default Cart;

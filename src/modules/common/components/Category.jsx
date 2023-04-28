import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import { Container } from "@mui/system";
import { Link } from "react-router-dom";

export default function Category() {
  const categoryOptions = [
    {
      imageUrl:
        "https://zmdltjiwzkcusyvshoct.supabase.co/storage/v1/object/public/ercommerce/banner/laptop.webp",
      title: "Laptop",
      href: "/products/laptops",
    },
    {
      imageUrl:
        "https://zmdltjiwzkcusyvshoct.supabase.co/storage/v1/object/public/ercommerce/banner/smartphone.webp?t=2023-04-27T07%3A41%3A58.677Z",
      title: "Smartphones",
      href: "/products/smartphones",
    },
    {
      imageUrl:
        "https://zmdltjiwzkcusyvshoct.supabase.co/storage/v1/object/public/ercommerce/banner/pc.webp",
      title: "PC",
      href: "/products/pc",
    },
    {
      imageUrl:
        "https://zmdltjiwzkcusyvshoct.supabase.co/storage/v1/object/public/ercommerce/banner/tablet.webp?t=2023-04-27T07%3A42%3A05.109Z",
      title: "Tablet",
      href: "/products/tablets",
    },
  ];

  return (
    <Container>
      <ImageList>
        {categoryOptions.map((item) => (
          <Link key={item.href} to={item.href} style={{display:"flex"}}>
            <ImageListItem key={item.imageUrl}>
              <img
                src={`${item.imageUrl}?w=248&fit=crop&auto=format`}
                srcSet={`${item.imageUrl}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                title={item.title}
                actionIcon={
                  <IconButton
                    sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                    aria-label={`info about ${item.title}`}
                  >
                    <InfoIcon />
                  </IconButton>
                }
              />
            </ImageListItem>
          </Link>
        ))}
      </ImageList>
    </Container>
  );
}

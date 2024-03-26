import Link from 'next/link';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Tooltip from '@mui/material/Tooltip';

import MDBox from '@/components/atoms/MDBox';
import MDTypography from '@/components/atoms/MDTypography';
import MDButton from '@/components/atoms/MDButton';
import MDAvatar from '@/components/atoms/MDAvatar';
import { TDefaultProjectCard } from './types';

function DefaultProjectCard({
  image,
  label,
  title,
  description,
  action,
  authors = [],
}: TDefaultProjectCard) {
  const renderAuthors =
    (authors?.length &&
      authors.map(({ image: media, name }) => (
        <Tooltip key={name} title={name} placement="bottom">
          <MDAvatar
            src={media}
            alt={name}
            size="xs"
            sx={({ borders: { borderWidth }, palette: { white } }) => ({
              border: `${borderWidth[2]} solid ${white.main}`,
              cursor: 'pointer',
              position: 'relative',
              ml: -1.25,

              '&:hover, &:focus': {
                zIndex: '10',
              },
            })}
          />
        </Tooltip>
      ))) ||
    null;

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'transparent',
        boxShadow: 'none',
        overflow: 'visible',
      }}
    >
      <MDBox position="relative" width="100.25%" shadow="xl" borderRadius="xl">
        <CardMedia
          src={image}
          component="img"
          title={title}
          sx={{
            maxWidth: '100%',
            margin: 0,
            boxShadow: ({ boxShadows: { md } }) => md,
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
      </MDBox>
      <MDBox mt={1} mx={0.5}>
        <MDTypography variant="button" fontWeight="regular" color="text" textTransform="capitalize">
          {label}
        </MDTypography>
        <MDBox mb={1}>
          {action.type === 'internal' ? (
            <MDTypography
              component={Link}
              to={action.route}
              variant="h5"
              textTransform="capitalize"
            >
              {title}
            </MDTypography>
          ) : (
            <MDTypography
              component="a"
              href={action.route}
              target="_blank"
              rel="noreferrer"
              variant="h5"
              textTransform="capitalize"
            >
              {title}
            </MDTypography>
          )}
        </MDBox>
        <MDBox mb={3} lineHeight={0}>
          <MDTypography variant="button" fontWeight="light" color="text">
            {description}
          </MDTypography>
        </MDBox>
        <MDBox display="flex" justifyContent="space-between" alignItems="center">
          {action.type === 'internal' ? (
            <MDButton
              component={Link}
              to={action.route}
              variant="outlined"
              size="small"
              color={action.color}
            >
              {action.label}
            </MDButton>
          ) : (
            <MDButton
              component="a"
              href={action.route}
              target="_blank"
              rel="noreferrer"
              variant="outlined"
              size="small"
              color={action.color}
            >
              {action.label}
            </MDButton>
          )}
          <MDBox display="flex">{renderAuthors}</MDBox>
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default DefaultProjectCard;

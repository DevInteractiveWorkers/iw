import { SVGProps } from "react";
import {
  ActivityIcon,
  AddSquare01Icon,
  AddSquare02Icon,
  AddSquare03Icon,
  AddSquare04Icon,
  Alarm01Icon,
  Alarm02Icon,
  Alarm03Icon,
  Alarm04Icon,
  Alarm05Icon,
  Alarm06Icon,
  AlarmCheckIcon,
  AlarmMinusIcon,
  AlarmOffIcon,
  AlarmPlusIcon,
  AlertCircleIcon,
  AlertSquareIcon,
  AlertTriangleIcon,
  AlignCenterIcon,
  AlignDown01Icon,
  AlignDown02Icon,
  AlignHorizontalCenter01Icon,
  AlignHorizontalCenter02Icon,
  AlignHorizontalCenter03Icon,
  AlignJustifyIcon,
  AlignLeft01Icon,
  AlignLeft02Icon,
  AlignLeftIcon,
  AlignRight01Icon,
  AlignRight02Icon,
  AlignRightIcon,
  AlignUp01Icon,
  AlignUp02Icon,
  AlignVerticalCenter01Icon,
  AlignVerticalCenter02Icon,
  AlignVerticalCenter03Icon,
  AnnotationAlertIcon,
  AnnotationCheckIcon,
  AnnotationIcon,
  AnnotationInformationIcon,
  AnnotationPlusIcon,
  AnnotationTypingIcon,
  AnnotationXIcon,
  ArrowCurveLeftDownIcon,
  ArrowCurveLeftRightIcon,
  ArrowCurveLeftUpIcon,
  ArrowCurveRightUpIcon,
  ArrowCurveUpLeftIcon,
  ArrowCurveUpRightIcon,
  ArrowDownContained01Icon,
  ArrowDownContained02Icon,
  ArrowDownLeft1Icon,
  ArrowDownLeftContainedIcon,
  ArrowDownLeftIcon,
  ArrowDownLeftSmIcon,
  ArrowDownLeftSquareContainedIcon,
  ArrowDownRight1Icon,
  ArrowDownRightContainedIcon,
  ArrowDownRightIcon,
  ArrowDownRightSmIcon,
  ArrowDownRightSquareContainedIcon,
  ArrowDownSquareContainedIcon,
  ArrowExpand01Icon,
  ArrowExpand02Icon,
  ArrowExpand03Icon,
  ArrowExpand04Icon,
  ArrowLeftContained01Icon,
  ArrowLeftContained02Icon,
  ArrowLeftIcon,
  ArrowLeftSmIcon,
  ArrowLeftSquareContainedIcon,
  ArrowRefresh01Icon,
  ArrowRefresh02Icon,
  ArrowRefresh03Icon,
  ArrowRefresh04Icon,
  ArrowRefresh05Icon,
  ArrowRefresh06Icon,
  ArrowRightContained01Icon,
  ArrowRightContained02Icon,
  ArrowRightIcon,
  ArrowRightSmIcon,
  ArrowRightSquareContainedIcon,
  ArrowRotateLeft01Icon,
  ArrowRotateLeft02Icon,
  ArrowRotateRight01Icon,
  ArrowRotateRight02Icon,
  ArrowSwitchHorizontal1Icon,
  ArrowSwitchHorizontalIcon,
  ArrowUpContained01Icon,
  ArrowUpContained02Icon,
  ArrowUpIcon,
  ArrowUpLeftContainedIcon,
  ArrowUpLeftIcon,
  ArrowUpLeftSmIcon,
  ArrowUpLeftSquareContainedIcon,
  ArrowUpRightContainedIcon,
  ArrowUpRightIcon,
  ArrowUpRightSmIcon,
  ArrowUpRightSquareContainedIcon,
  ArrowUpSmIcon,
  ArrowUpSquareContainedIcon,
  AtomIcon,
  Attatchment01Icon,
  Attatchment02Icon,
  AudioSettings01Icon,
  AudioSettings02Icon,
  Bag01Icon,
  Bag02Icon,
  Bag03Icon,
  Bag04Icon,
  Bag05Icon,
  BankIcon,
  BankNote01Icon,
  BankNote02Icon,
  BankNote03Icon,
  BankNote04Icon,
  BankNote05Icon,
  BankNote06Icon,
  BarChart01Icon,
  BarChart02Icon,
  BarChart03Icon,
  BarChart04Icon,
  BarChart05Icon,
  BarChartSquare01Icon,
  BarChartSquare02Icon,
  BarChartSquare03Icon,
  BarChartSquareDown01Icon,
  BarChartSquareDown02Icon,
  BarChartSquareUp011Icon,
  BarChartSquareUp01Icon,
  BarGroup01Icon,
  BarGroup02Icon,
  BarGroup03Icon,
  Battery01Icon,
  Battery02Icon,
  Battery03Icon,
  Battery04Icon,
  BatteryEmptyIcon,
  BatteryFill01Icon,
  BatteryFill02Icon,
  BatteryFill04Icon,
  Bell01Icon,
  Bell02Icon,
  Bell03Icon,
  Bell04Icon,
  BellOff01Icon,
  BellOff02Icon,
  BellRinging01Icon,
  BellRinging02Icon,
  BellRinging03Icon,
  BellRinging04Icon,
  Bezier01Icon,
  Bezier02Icon,
  Bluetooth01Icon,
  Bluetooth02Icon,
  Bold01Icon,
  Bold02Icon,
  Book01Icon,
  Book02Icon,
  Book03Icon,
  Book04Icon,
  Book05Icon,
  Book06Icon,
  BoxIcon,
  BracketsCheckIcon,
  BracketsIcon,
  BracketsMinusIcon,
  BracketsPlusIcon,
  BracketsSlashIcon,
  BracketsTypingIcon,
  BracketsXIcon,
  BrowserCodeIcon,
  BrowserIcon,
  Calculator01Icon,
  Calculator021Icon,
  Calculator02Icon,
  Calendar01Icon,
  Calendar02Icon,
  Calendar03Icon,
  Calendar04Icon,
  Calendar05Icon,
  Calendar06Icon,
  Calendar07Icon,
  CalendarCheckIcon,
  CalendarMinusIcon,
  CalendarNumberIcon,
  CalendarPlusIcon,
  Camera01Icon,
  Camera02Icon,
  CameraLensIcon,
  CameraOffIcon,
  CancelLeftIcon,
  CancelRightIcon,
  Car1Icon,
  CarIcon,
  Card01Icon,
  Card02Icon,
  CardAddIcon,
  CardCheckIcon,
  CardDownIcon,
  CardEditIcon,
  CardLockIcon,
  CardMinusIcon,
  CardNumberIcon,
  CardShieldIcon,
  CardUpIcon,
  CardXIcon,
  CartIcon,
  CenterIcon,
  ChartBreakoutCircleIcon,
  ChartBreakoutSquareIcon,
  Check01Icon,
  Check02Icon,
  CheckBrokenIcon,
  CheckContainedIcon,
  CheckSquareBrokenIcon,
  CheckSquareContainedIcon,
  ChevronDoubleDownIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronDoubleUpIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  ChromecastIcon,
  CircleIcon,
  Clock01Icon,
  ClockBackwardIcon,
  ClockCheckIcon,
  ClockForwardIcon,
  ClockPlusIcon,
  CloseIcon,
  Cloud01Icon,
  Cloud02Icon,
  Cloud03Icon,
  Cloud04Icon,
  CloudLightningIcon,
  CloudRainIcon,
  CloudSnowIcon,
  CloudSunIcon,
  Code01Icon,
  Code02Icon,
  Code03Icon,
  Code04Icon,
  CoinBrokenIcon,
  CoinHandIcon,
  CoinNumberIcon,
  CoinUnbrokenIcon,
  CoinsIcon,
  CoinsRotateIcon,
  ColorPickerIcon,
  ColorSwatch01Icon,
  ColorSwatch02Icon,
  Colors01Icon,
  Colors02Icon,
  ColumnHorizontal01Icon,
  ColumnHorizontal02Icon,
  ColumnHorizontal03Icon,
  ColumnVertical01Icon,
  ColumnVertical02Icon,
  ColumnVertical03Icon,
  CompareIcon,
  Compass1Icon,
  Compass2Icon,
  CompassIcon,
  ComponentIcon,
  ComputerIcon,
  ContrastIcon,
  CopyLeftIcon,
  CopyRightIcon,
  Crop01Icon,
  Crop02Icon,
  CurrencyBathIcon,
  CurrencyBitcoinIcon,
  CurrencyCentIcon,
  CurrencyCoinBathIcon,
  CurrencyCoinBitcoinIcon,
  CurrencyCoinCentIcon,
  CurrencyCoinDollarIcon,
  CurrencyCoinEuroIcon,
  CurrencyCoinPoundIcon,
  CurrencyCoinRubelIcon,
  CurrencyCoinRupeeIcon,
  CurrencyCoinYenIcon,
  CurrencyDollarIcon,
  CurrencyEuroIcon,
  CurrencyPoundIcon,
  CurrencyRubelIcon,
  CurrencyRupeeIcon,
  CurrencyYenIcon,
  Cursor01Icon,
  Cursor02Icon,
  Cursor03Icon,
  Cursor04Icon,
  Cursor05Icon,
  Cursor06Icon,
  CursorArrowIcon,
  DashIcon,
  Data01Icon,
  Data02Icon,
  Data03Icon,
  Data04Icon,
  DeleteIcon,
  DeliveryIcon,
  Diamond1Icon,
  DiamondIcon,
  DiscIcon,
  DiscountCircleIcon,
  DiscountSquareIcon,
  DiscountStar01Icon,
  DiscountStar02Icon,
  DiscountStar03Icon,
  DividerIcon,
  DotHorizontalIcon,
  DotVerticalIcon,
  DownArrowIcon,
  DownArrowSmIcon,
  Download01Icon,
  Download02Icon,
  DownloadIcon,
  Drop1Icon,
  DropIcon,
  Edit01Icon,
  Edit02Icon,
  Edit03Icon,
  Edit04Icon,
  EditContainedIcon,
  EmailIcon,
  EmbedIcon,
  EqualsIcon,
  EqualsNotIcon,
  Eraser01Icon,
  Eraser02Icon,
  Expand02Icon,
  ExpandIcon,
  EyeClosedIcon,
  EyeOpenIcon,
  FaceId01Icon,
  FaceId02Icon,
  FastBackwardIcon,
  FastForwardIcon,
  FavouriteIcon,
  Feather01Icon,
  Feather02Icon,
  File01Icon,
  File02Icon,
  File03Icon,
  File04Icon,
  File05Icon,
  File06Icon,
  FileAttach01Icon,
  FileAttach02Icon,
  FileAttach03Icon,
  FileBranchIcon,
  FileCheck01Icon,
  FileCheck02Icon,
  FileCodeIcon,
  FileDown01Icon,
  FileDown02Icon,
  FileEdit01Icon,
  FileEdit02Icon,
  FileEye01Icon,
  FileEye02Icon,
  FileIcon,
  FileLock01Icon,
  FileLock02Icon,
  FileLock03Icon,
  FileMinus01Icon,
  FileMinus02Icon,
  FileMultipleIcon,
  FileNoneIcon,
  FilePlus01Icon,
  FilePlus02Icon,
  FileQuestion01Icon,
  FileQuestion02Icon,
  FileReturn01Icon,
  FileReturn02Icon,
  FileSearch01Icon,
  FileSearch02Icon,
  FileShield01Icon,
  FileShield02Icon,
  FileShield03Icon,
  FileShredIcon,
  FileUp01Icon,
  FileUp02Icon,
  FileX02Icon,
  FilterIcon,
  Fingerpint01Icon,
  Fingerpint02Icon,
  Flame01Icon,
  FlashOffIcon,
  FlashOnIcon,
  FlexAlignBottom01Icon,
  FlexAlignCenter01Icon,
  FlexAlignLeft01Icon,
  FlexAlignRight01Icon,
  FlexAlignSpaced01Icon,
  FlexAlignTop01Icon,
  FlexColumnsIcon,
  FlexRowsIcon,
  Flip01Icon,
  Flip02Icon,
  FlipLeftIcon,
  FlipRightIcon,
  FolderCodeIcon,
  FolderDown01Icon,
  FolderDown02Icon,
  FolderIcon,
  FolderMinus011Icon,
  FolderMinus01Icon,
  FolderOpen01Icon,
  FolderOpen02Icon,
  FolderOpen03Icon,
  FolderPlus01Icon,
  FolderPlus02Icon,
  FolderSearch01Icon,
  FolderSearch02Icon,
  FolderShieldIcon,
  FolderUp01Icon,
  FolderUp02Icon,
  FolderX01Icon,
  FolderX02Icon,
  GearIcon,
  Gift01Icon,
  Gift02Icon,
  GitBranch01Icon,
  GitBranch02Icon,
  GitBranch03Icon,
  GitBranch04Icon,
  GitBranch05Icon,
  Glasses011Icon,
  Glasses012Icon,
  Glasses01Icon,
  Glasses02Icon,
  Globe011Icon,
  Globe01Icon,
  Globe021Icon,
  Globe02Icon,
  Globe03Icon,
  Globe04Icon,
  Globe05Icon,
  GlobeIcon,
  GraduationCap01Icon,
  GraduationCap02Icon,
  Grid01Icon,
  Grid02Icon,
  Grid03Icon,
  Grid04FilledIcon,
  Hash01Icon,
  Hash02Icon,
  Header01Icon,
  Header02Icon,
  HeadphonesIcon,
  HeartIcon,
  HelpCircleContainedIcon,
  HelpIcon,
  HelpSquareContainedIcon,
  HexagonIcon,
  Home01Icon,
  Home02Icon,
  Home03Icon,
  Home04Icon,
  Home05Icon,
  HorizontalChart01Icon,
  HorizontalChart02Icon,
  HorizontalChart03Icon,
  Hourglass01Icon,
  Hourglass02Icon,
  Hourglass03Icon,
  Image01Icon,
  Image02Icon,
  Image03Icon,
  Image04Icon,
  ImageAddIcon,
  ImageAvatarIcon,
  ImageCheckIcon,
  ImageDownIcon,
  ImageFocusIcon,
  ImageIcon,
  ImageIndentLeftIcon,
  ImageIndentRightIcon,
  ImageMinusIcon,
  ImageNoBordersIcon,
  ImageQuestionIcon,
  ImageUpIcon,
  ImageXIcon,
  Inbox01Icon,
  Inbox02Icon,
  IndentDecreaseIcon,
  IndentIncreaseIcon,
  IndentLeftIcon,
  IndentRightIcon,
  InfoSquare01ContainedIcon,
  InfoSquare02ContainedFilledIcon,
  InformationCircleContainedIcon,
  IntersectIcon,
  Iphone02Icon,
  Italics01Icon,
  Italics02Icon,
  Key01Icon,
  Key02Icon,
  KeyboardIcon,
  Laptop01Icon,
  Laptop02Icon,
  Layers01Icon,
  Layers02Icon,
  Layers03Icon,
  Layers04Icon,
  Layers05Icon,
  Layout01Icon,
  Layout02Icon,
  Layout03Icon,
  Layout04Icon,
  LayoutBottomIcon,
  LayoutGrid01Icon,
  LayoutLeftIcon,
  LayoutRightIcon,
  LayoutScaleIcon,
  LayoutTopIcon,
  LetterSpacing01Icon,
  LetterSpacing02Icon,
  LetterSpacing03Icon,
  Lightbulb01Icon,
  Lightbulb02Icon,
  Lightbulb03Icon,
  Lightning01Icon,
  Lightning02Icon,
  LightningCircleContainedIcon,
  LightningFilledIcon,
  LightningSquareContainedIcon,
  LineChartDown01Icon,
  LineChartDown02Icon,
  LineChartUp01Icon,
  LineChartUp02Icon,
  LineHeightIcon,
  LinkAngledIcon,
  LinkBrokenIcon,
  LinkExternalIcon,
  LinkIcon,
  List1Icon,
  ListIcon,
  ListNumbersIcon,
  Loader01Icon,
  Loader02Icon,
  Lock01Icon,
  Lock02Icon,
  Lock03Icon,
  Lock04Icon,
  LockOpen01Icon,
  LockOpen02Icon,
  LockOpen03Icon,
  LockOpen04Icon,
  Logout01Icon,
  Logout02Icon,
  Logout03Icon,
  Logout04Icon,
  Luggage01Icon,
  Luggage02Icon,
  Luggage03Icon,
  Luggage04Icon,
  Mail01Icon,
  Mail02Icon,
  Mail03Icon,
  Mail04Icon,
  Mail05Icon,
  Map011Icon,
  Map01Icon,
  Map02Icon,
  Map03Icon,
  Map04Icon,
  Marker01Icon,
  Marker02Icon,
  Marker03Icon,
  Marker04Icon,
  Marker05Icon,
  Marker06Icon,
  Maximise01Icon,
  Maximise02Icon,
  MediaStrip01Icon,
  MediaStrip02Icon,
  Menu01Icon,
  Menu02Icon,
  Menu03Icon,
  Menu04Icon,
  Menu05Icon,
  MessageAlertCircleIcon,
  MessageAlertPlusIcon,
  MessageChat011Icon,
  MessageChat01Icon,
  MessageCircleIcon,
  MessageNotifyCircleIcon,
  MessageNotifySquareIcon,
  MessageSquareAlertIcon,
  MessageSquareIcon,
  MessageSquareInformationIcon,
  MessageSquarePlus1Icon,
  MessageSquarePlusIcon,
  MessageSquareTypingIcon,
  MessageSquareXIcon,
  MessageText01Icon,
  MessageText02Icon,
  MessageTypingIcon,
  MessageXIcon,
  Microphone01Icon,
  Microphone02Icon,
  MicrophoneOff01Icon,
  MicrophoneOff02Icon,
  Minimise01Icon,
  Minimise02Icon,
  MinusCircleContainedIcon,
  MinusSquareContainedIcon,
  Moon01Icon,
  Moon02Icon,
  MouseIcon,
  MoveIcon,
  Note01Icon,
  Note02Icon,
  NotificationBoxIcon,
  NotificationBubbleIcon,
  NotificationSquare01Icon,
  NotificationSquare02Icon,
  OctagonIcon,
  OpenIcon,
  OverlapIcon,
  Package01Icon,
  Package02Icon,
  PackageCheckIcon,
  PackageMinusIcon,
  PackagePlusIcon,
  PackageXIcon,
  PaintBucket01Icon,
  PaintBucket02Icon,
  PaletteIcon,
  Paperclip01Icon,
  Paperclip02Icon,
  PaperclipIcon,
  PassportIcon,
  Password01Icon,
  Password02Icon,
  Pause01Icon,
  Pause02Icon,
  Pause03Icon,
  PenTool01Icon,
  PenTool02Icon,
  PenTool03Icon,
  PenTool04Icon,
  Pencil01Icon,
  Pencil02Icon,
  Pencil03Icon,
  PentagonIcon,
  Percent01Icon,
  Percent02Icon,
  Percent03Icon,
  PerspectiveIcon,
  PhoneCall01Icon,
  PhoneCall02Icon,
  PhoneDownIcon,
  PhoneIcon,
  PhoneIncoming01Icon,
  PhoneIncoming02Icon,
  PhoneOffIcon,
  PhoneOutgoing01Icon,
  PhoneOutgoing02Icon,
  PhoneUpIcon,
  PhoneXIcon,
  PieChart01Icon,
  PieChart02Icon,
  PieChart03Icon,
  PlaneIcon,
  Play01Icon,
  Play02Icon,
  Play03Icon,
  Plug01Icon,
  Plus01Icon,
  Plus02Icon,
  Plus03Icon,
  Pointer01Icon,
  Pointer02Icon,
  PointingIcon,
  PowerIcon,
  Presentation01Icon,
  Presentation02Icon,
  Presentation03Icon,
  ProgressIcon,
  QuoteIcon,
  ReceiptIcon,
  ReceiptLinesIcon,
  Refresh011Icon,
  Refresh01Icon,
  RssIcon,
  RulerIcon,
  Save01Icon,
  Save02Icon,
  Scale01Icon,
  Scale02Icon,
  Scale03Icon,
  Scan1Icon,
  ScanIcon,
  Scissors01Icon,
  Scissors02Icon,
  Scissors03Icon,
  Scissors04Icon,
  Search01Icon,
  Search02Icon,
  Send01Icon,
  Send02Icon,
  Send03Icon,
  Server01Icon,
  Server02Icon,
  Server03Icon,
  Server04Icon,
  Server05Icon,
  Server06Icon,
  ServerDownIcon,
  ServerUpIcon,
  SettingsIcon,
  Share1Icon,
  ShareIcon,
  Shield01Icon,
  Shield02Icon,
  ShieldCheckIcon,
  ShieldPlusIcon,
  ShuffleIcon,
  SignalIcon,
  SkewIcon,
  SkipBackIcon,
  SkipForwardIcon,
  Slash01BackwardIcon,
  Slash01ForwardIcon,
  Slash02Forward1Icon,
  Slash02ForwardIcon,
  SmileyHappyIcon,
  SmileyHappyPlusIcon,
  SmileyNeutralIcon,
  SmileySadIcon,
  SmileyWinkIcon,
  SnowflakeIcon,
  SortHorizontalIcon,
  SortVertical01Icon,
  SortVertical02Icon,
  SpaceHeightIcon,
  SpaceHorizontalIcon,
  SpaceVerticalIcon,
  SpaceWidthIcon,
  SpeakerIcon,
  SquareIcon,
  Star01Icon,
  Star02Icon,
  StarsIcon,
  Stop01Icon,
  Stop02Icon,
  StopCircleContainedIcon,
  Stopwatch01Icon,
  Stopwatch02Icon,
  Stopwatch03Icon,
  Stopwatch04Icon,
  Stopwatch05Icon,
  StopwatchOffIcon,
  StopwatchSnoozeIcon,
  Sun01Icon,
  Sun02Icon,
  Sun03Icon,
  SunDownIcon,
  SunUpIcon,
  SuperscriptIcon,
  TableIcon,
  TagIcon,
  Target011Icon,
  Target01Icon,
  Target021Icon,
  Target02Icon,
  Target03Icon,
  Target04Icon,
  Temperature01Icon,
  Temperature02Icon,
  Temperature03Icon,
  Temperature04Icon,
  TerminalIcon,
  TextInput01Icon,
  TextInput02Icon,
  ThumbDownIcon,
  ThumbUpIcon,
  Ticket01Icon,
  Ticket02Icon,
  ToggleRightIcon,
  ToogleLeftIcon,
  Train1Icon,
  TrainIcon,
  TransformIcon,
  Trash01Icon,
  Trash02Icon,
  Trash03Icon,
  Trash04Icon,
  TrendDown01Icon,
  TrendDown02Icon,
  TrendUp01Icon,
  TrendUp02Icon,
  TriangleIcon,
  TruckIcon,
  TvIcon,
  Type01Icon,
  Type02Icon,
  Type03Icon,
  TypeStrike01Icon,
  TypeStrike02Icon,
  Umbrella01Icon,
  Umbrella02Icon,
  UmbrellaIcon,
  Underline01Icon,
  Underline02Icon,
  UnionIcon,
  Upload01Icon,
  Upload02Icon,
  Upload03Icon,
  Upload04Icon,
  UserProfile01Icon,
  UserProfile02Icon,
  UserProfile031Icon,
  UserProfile03Icon,
  UserProfileAdd01Icon,
  UserProfileAdd02Icon,
  UserProfileCheckIcon,
  UserProfileCircleIcon,
  UserProfileDownIcon,
  UserProfileGroupIcon,
  UserProfileLeftIcon,
  UserProfileMinusIcon,
  UserProfileRightIcon,
  UserProfileSquareIcon,
  UserProfileStarIcon,
  UserProfileUpIcon,
  UserProfileXIcon,
  UsersProfiles01Icon,
  UsersProfiles02Icon,
  UsersProfiles03Icon,
  UsersProfilesCheckIcon,
  UsersProfilesDownIcon,
  UsersProfilesLeftIcon,
  UsersProfilesMinusIcon,
  UsersProfilesPlusIcon,
  UsersProfilesRightIcon,
  UsersProfilesUpIcon,
  UsersProfilesXIcon,
  VariantIcon,
  VideoOffIcon,
  VideoOnIcon,
  Volume01Icon,
  Volume02Icon,
  Volume03Icon,
  Volume04Icon,
  Volume05Icon,
  Volume06Icon,
  Volume07Icon,
  Wallert04Icon,
  Wallet01Icon,
  Wallet02Icon,
  Wallet03Icon,
  Watch01Icon,
  Watch02Icon,
  WaveformIcon,
  WebcamIcon,
  WifiOffIcon,
  WifiOnIcon,
  Wind01Icon,
  Wind02Icon,
  Wind03Icon,
  WrenchIcon,
  X01Icon,
  X02Icon,
  X03Icon,
  XCircleContainedIcon,
  XSquareContainedIcon,
  YoutubeIcon,
  ZoomInIcon,
  ZoomOutIcon,
} from "stratis-icons-react";

export default function Icon({
  color = "#fff",
  width = 40,
  height = 40,
  ...props
}: {
  icon: string;
  className?: string;
} & SVGProps<SVGSVGElement>) {
  const { icon, className } = props;
  const svgProps: SVGProps<SVGSVGElement> = props;

  switch (icon) {
    case "iw":
      return (
        <svg
          width="113"
          height="90"
          viewBox="0 0 113 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <path
            d="M43.1125 37.3402L56.4038 55.8156L69.6914 37.3365L75.9322 36.1783L75.9431 36.2328L77.7765 48.8124L79.7914 62.6301L79.9983 64.0569L82.035 77.998L82.0459 78.096L56.3965 89.8081L30.7471 78.096L30.758 77.998L32.7947 64.0569L33.0052 62.6301L35.0202 48.8124L36.8536 36.2328L36.8645 36.1783L43.1125 37.3402Z"
            fill="#DCDCDC"
          />
          <path
            d="M112.796 55.3546C112.796 56.8068 112.796 58.2591 112.796 59.7076C112.796 61.1598 112.796 62.6083 112.785 64.0605L103.908 68.1049L102.38 68.802L95.7904 71.8044L90.4064 74.255L82.9639 77.6749L82.049 78.0961L82.0381 78.0017L80.0014 64.0605L79.7909 62.6338L77.7759 48.8124L75.9425 36.2365L75.9316 36.1784C76.5488 36.055 77.1624 35.9352 77.7759 35.8191C78.1245 35.7501 78.473 35.6846 78.8215 35.612C79.1991 35.5394 79.5767 35.4705 79.9506 35.3979C80.6767 35.2563 81.4028 35.122 82.1253 34.9877C82.1253 34.9877 82.1362 34.9877 82.1398 34.9877C82.1543 35.0095 82.1688 35.0311 82.1833 35.0529C83.3524 36.7847 84.4851 38.5491 85.6214 40.3063C86.9502 42.3684 88.279 44.4304 89.6658 46.4526C89.7929 46.6487 89.9236 46.8376 90.0579 47.03C90.0724 47.0481 90.0833 47.0698 90.0978 47.088C92.8062 43.1416 95.3366 39.0574 97.9833 35.0566C97.9978 35.0348 98.0123 35.0095 98.0268 34.9877C99.479 35.2563 100.931 35.5322 102.38 35.8153C104.736 36.2692 107.085 36.7411 109.434 37.2312C110.552 37.4636 111.667 37.7032 112.788 37.9428C112.788 42.2921 112.796 46.6451 112.799 51.0017C112.799 52.4539 112.799 53.9061 112.799 55.3583L112.796 55.3546Z"
            fill="white"
          />
          <path
            d="M94.5379 27.5195C98.8183 25.7805 101.665 21.2787 101.523 16.6934C101.577 10.2057 95.2568 4.62568 88.7945 5.53693C84.899 5.92176 81.283 8.463 79.6529 12.0536C77.8013 15.891 78.3278 20.7523 81.0325 24.067C84.0966 28.0714 89.9526 29.5635 94.5343 27.5195H94.5379Z"
            fill="white"
          />
          <path
            d="M36.864 36.1783L36.8531 36.2365L35.0197 48.8124L33.0048 62.6338L32.7942 64.0604L30.7575 78.0017L30.7466 78.096L22.3893 74.2549L17.0052 71.8043L10.4159 68.8019L8.88745 68.1049L0.010891 64.0604C0.00363005 62.6082 0.00363049 61.1598 0 59.7076C0 58.259 0 56.8067 0 55.3545C0 53.9023 0 52.4501 0 50.9979C0 46.6413 0.010891 42.2885 0.010891 37.9392C1.12908 37.6995 2.24365 37.4599 3.36547 37.2276C5.7144 36.7338 8.06333 36.2655 10.4195 35.8117C11.8681 35.5286 13.3203 35.2525 14.7725 34.9839C14.787 35.0057 14.8015 35.0311 14.816 35.0528C17.4663 39.0536 19.9931 43.1416 22.7015 47.0843C22.716 47.0662 22.7269 47.0444 22.7414 47.0262C22.8757 46.8338 23.0064 46.6451 23.1335 46.449C24.5203 44.4268 25.8491 42.361 27.1779 40.3025C28.3142 38.5417 29.4469 36.781 30.616 35.0493C30.6305 35.0275 30.645 35.0057 30.6595 34.9839C30.6595 34.9839 30.6704 34.9839 30.674 34.9839C31.4727 35.1327 32.2787 35.2853 33.081 35.4414C33.7273 35.5612 34.3735 35.6847 35.0197 35.8117C35.6333 35.9279 36.2468 36.0476 36.864 36.1711V36.1783Z"
            fill="white"
          />
          <path
            d="M18.1962 27.5195C13.9158 25.7805 11.0695 21.2787 11.2111 16.6934C11.1567 10.2057 17.4773 4.62568 23.9396 5.53693C27.8351 5.92176 31.4511 8.463 33.0812 12.0536C34.9327 15.891 34.4063 20.7523 31.7016 24.067C28.6375 28.0714 22.7815 29.5635 18.1998 27.5195H18.1962Z"
            fill="white"
          />
          <path
            d="M57.8587 33.9855C64.5425 33.4519 70.6671 28.6633 72.6167 22.2155C74.8349 15.7097 72.5005 7.99121 67.1165 3.76168C63.6566 0.922638 59.0423 -0.377113 54.6095 0.0948507C45.4098 0.748339 38.1052 10.0025 39.5248 19.1151C40.3815 27.9263 49.0475 34.9368 57.8624 33.9893L57.8587 33.9855Z"
            fill="#DCDCDC"
          />
        </svg>
      );
    case "activity":
      return (
        <ActivityIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "add-square-01":
      return (
        <AddSquare01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "add-square-02":
      return (
        <AddSquare02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "add-square-03":
      return (
        <AddSquare03Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "add-square-04":
      return (
        <AddSquare04Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "alarm-01":
      return (
        <Alarm01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "alarm-02":
      return (
        <Alarm02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "alarm-03":
      return (
        <Alarm03Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "alarm-04":
      return (
        <Alarm04Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "alarm-05":
      return (
        <Alarm05Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "alarm-06":
      return (
        <Alarm06Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "alarm-check":
      return (
        <AlarmCheckIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "alarm-minus":
      return (
        <AlarmMinusIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "alarm-off":
      return (
        <AlarmOffIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "alarm-plus":
      return (
        <AlarmPlusIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "alert-circle":
      return (
        <AlertCircleIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "alert-square":
      return (
        <AlertSquareIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "alert-triangle":
      return (
        <AlertTriangleIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "align-center":
      return (
        <AlignCenterIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "align-down-01":
      return (
        <AlignDown01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "align-down-02":
      return (
        <AlignDown02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "align-horizontal-center-01":
      return (
        <AlignHorizontalCenter01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "align-horizontal-center-02":
      return (
        <AlignHorizontalCenter02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "align-horizontal-center-03":
      return (
        <AlignHorizontalCenter03Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "align-justify":
      return (
        <AlignJustifyIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "align-left":
      return (
        <AlignLeftIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "align-left-01":
      return (
        <AlignLeft01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "align-left-02":
      return (
        <AlignLeft02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "align-right":
      return (
        <AlignRightIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "align-right-01":
      return (
        <AlignRight01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "align-right-02":
      return (
        <AlignRight02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "align-up-01":
      return (
        <AlignUp01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "align-up-02":
      return (
        <AlignUp02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "align-vertical-center-01":
      return (
        <AlignVerticalCenter01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "align-vertical-center-02":
      return (
        <AlignVerticalCenter02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "align-vertical-center-03":
      return (
        <AlignVerticalCenter03Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "annotation":
      return (
        <AnnotationIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "annotation-alert":
      return (
        <AnnotationAlertIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "annotation-check":
      return (
        <AnnotationCheckIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "annotation-information":
      return (
        <AnnotationInformationIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "annotation-plus":
      return (
        <AnnotationPlusIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "annotation-typing":
      return (
        <AnnotationTypingIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "annotation-x":
      return (
        <AnnotationXIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "arrow-curve-left-down":
      return (
        <ArrowCurveLeftDownIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "arrow-curve-left-right":
      return (
        <ArrowCurveLeftRightIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "arrow-curve-left-up":
      return (
        <ArrowCurveLeftUpIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "arrow-curve-right-up":
      return (
        <ArrowCurveRightUpIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "arrow-curve-up-left":
      return (
        <ArrowCurveUpLeftIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "arrow-curve-up-right":
      return (
        <ArrowCurveUpRightIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "arrow-down-contained-01":
      return (
        <ArrowDownContained01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "arrow-down-contained-02":
      return (
        <ArrowDownContained02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "arrow-down-left":
      return (
        <ArrowDownLeftIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "arrow-down-left-1":
      return (
        <ArrowDownLeft1Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "arrow-down-left-contained":
      return (
        <ArrowDownLeftContainedIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "arrow-down-left-sm":
      return (
        <ArrowDownLeftSmIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "arrow-down-left-square-contained":
      return (
        <ArrowDownLeftSquareContainedIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "arrow-down-right":
      return (
        <ArrowDownRightIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "arrow-down-right-1":
      return (
        <ArrowDownRight1Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "arrow-down-right-contained":
      return (
        <ArrowDownRightContainedIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "arrow-down-right-sm":
      return (
        <ArrowDownRightSmIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "arrow-down-right-square-contained":
      return (
        <ArrowDownRightSquareContainedIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "arrow-down-square-contained":
      return (
        <ArrowDownSquareContainedIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "arrow-expand-01":
      return (
        <ArrowExpand01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "arrow-expand-02":
      return (
        <ArrowExpand02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "arrow-expand-03":
      return (
        <ArrowExpand03Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "arrow-expand-04":
      return (
        <ArrowExpand04Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "arrow-left":
      return (
        <ArrowLeftIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "arrow-left-contained-01":
      return (
        <ArrowLeftContained01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "arrow-left-contained-02":
      return (
        <ArrowLeftContained02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "arrow-left-sm":
      return (
        <ArrowLeftSmIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "arrow-left-square-contained":
      return (
        <ArrowLeftSquareContainedIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "arrow-refresh-01":
      return (
        <ArrowRefresh01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "arrow-refresh-02":
      return (
        <ArrowRefresh02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "arrow-refresh-03":
      return (
        <ArrowRefresh03Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "arrow-refresh-04":
      return (
        <ArrowRefresh04Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "arrow-refresh-05":
      return (
        <ArrowRefresh05Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "arrow-refresh-06":
      return (
        <ArrowRefresh06Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "arrow-right":
      return (
        <ArrowRightIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "arrow-right-contained-01":
      return (
        <ArrowRightContained01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "arrow-right-contained-02":
      return (
        <ArrowRightContained02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "arrow-right-sm":
      return (
        <ArrowRightSmIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "arrow-right-square-contained":
      return (
        <ArrowRightSquareContainedIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "arrow-rotate-left-01":
      return (
        <ArrowRotateLeft01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "arrow-rotate-left-02":
      return (
        <ArrowRotateLeft02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "arrow-rotate-right-01":
      return (
        <ArrowRotateRight01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "arrow-rotate-right-02":
      return (
        <ArrowRotateRight02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "arrow-switch-horizontal":
      return (
        <ArrowSwitchHorizontalIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "arrow-switch-horizontal-1":
      return (
        <ArrowSwitchHorizontal1Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "arrow-up":
      return (
        <ArrowUpIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "arrow-up-contained-01":
      return (
        <ArrowUpContained01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "arrow-up-contained-02":
      return (
        <ArrowUpContained02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "arrow-up-left":
      return (
        <ArrowUpLeftIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "arrow-up-left-contained":
      return (
        <ArrowUpLeftContainedIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "arrow-up-left-sm":
      return (
        <ArrowUpLeftSmIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "arrow-up-left-square-contained":
      return (
        <ArrowUpLeftSquareContainedIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "arrow-up-right":
      return (
        <ArrowUpRightIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "arrow-up-right-contained":
      return (
        <ArrowUpRightContainedIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "arrow-up-right-sm":
      return (
        <ArrowUpRightSmIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "arrow-up-right-square-contained":
      return (
        <ArrowUpRightSquareContainedIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "arrow-up-sm":
      return (
        <ArrowUpSmIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "arrow-up-square-contained":
      return (
        <ArrowUpSquareContainedIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "atom":
      return (
        <AtomIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "attatchment-01":
      return (
        <Attatchment01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "attatchment-02":
      return (
        <Attatchment02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "audio-settings-01":
      return (
        <AudioSettings01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "audio-settings-02":
      return (
        <AudioSettings02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "bag-01":
      return (
        <Bag01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "bag-02":
      return (
        <Bag02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "bag-03":
      return (
        <Bag03Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "bag-04":
      return (
        <Bag04Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "bag-05":
      return (
        <Bag05Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "bank":
      return (
        <BankIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "bank-note-01":
      return (
        <BankNote01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "bank-note-02":
      return (
        <BankNote02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "bank-note-03":
      return (
        <BankNote03Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "bank-note-04":
      return (
        <BankNote04Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "bank-note-05":
      return (
        <BankNote05Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "bank-note-06":
      return (
        <BankNote06Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "bar-chart-01":
      return (
        <BarChart01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "bar-chart-02":
      return (
        <BarChart02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "bar-chart-03":
      return (
        <BarChart03Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "bar-chart-04":
      return (
        <BarChart04Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "bar-chart-05":
      return (
        <BarChart05Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "bar-chart-square-01":
      return (
        <BarChartSquare01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "bar-chart-square-02":
      return (
        <BarChartSquare02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "bar-chart-square-03":
      return (
        <BarChartSquare03Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "bar-chart-square-down-01":
      return (
        <BarChartSquareDown01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "bar-chart-square-down-02":
      return (
        <BarChartSquareDown02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "bar-chart-square-up-01":
      return (
        <BarChartSquareUp01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "bar-chart-square-up-011":
      return (
        <BarChartSquareUp011Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "bar-group-01":
      return (
        <BarGroup01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "bar-group-02":
      return (
        <BarGroup02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "bar-group-03":
      return (
        <BarGroup03Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "battery-01":
      return (
        <Battery01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "battery-02":
      return (
        <Battery02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "battery-03":
      return (
        <Battery03Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "battery-04":
      return (
        <Battery04Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "battery-empty":
      return (
        <BatteryEmptyIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "battery-fill-01":
      return (
        <BatteryFill01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "battery-fill-02":
      return (
        <BatteryFill02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "battery-fill-04":
      return (
        <BatteryFill04Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "bell-01":
      return (
        <Bell01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "bell-02":
      return (
        <Bell02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "bell-03":
      return (
        <Bell03Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "bell-04":
      return (
        <Bell04Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "bell-off-01":
      return (
        <BellOff01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "bell-off-02":
      return (
        <BellOff02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "bell-ringing-01":
      return (
        <BellRinging01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "bell-ringing-02":
      return (
        <BellRinging02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "bell-ringing-03":
      return (
        <BellRinging03Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "bell-ringing-04":
      return (
        <BellRinging04Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "bezier-01":
      return (
        <Bezier01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "bezier-02":
      return (
        <Bezier02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "bluetooth-01":
      return (
        <Bluetooth01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "bluetooth-02":
      return (
        <Bluetooth02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "bold-01":
      return (
        <Bold01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "bold-02":
      return (
        <Bold02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "book-01":
      return (
        <Book01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "book-02":
      return (
        <Book02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "book-03":
      return (
        <Book03Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "book-04":
      return (
        <Book04Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "book-05":
      return (
        <Book05Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "book-06":
      return (
        <Book06Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "box":
      return (
        <BoxIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "brackets":
      return (
        <BracketsIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "brackets-check":
      return (
        <BracketsCheckIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "brackets-minus":
      return (
        <BracketsMinusIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "brackets-plus":
      return (
        <BracketsPlusIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "brackets-slash":
      return (
        <BracketsSlashIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "brackets-typing":
      return (
        <BracketsTypingIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "brackets-x":
      return (
        <BracketsXIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "browser":
      return (
        <BrowserIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "browser-code":
      return (
        <BrowserCodeIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "calculator-01":
      return (
        <Calculator01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "calculator-02":
      return (
        <Calculator02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "calculator-021":
      return (
        <Calculator021Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "calendar-01":
      return (
        <Calendar01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "calendar-02":
      return (
        <Calendar02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "calendar-03":
      return (
        <Calendar03Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "calendar-04":
      return (
        <Calendar04Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "calendar-05":
      return (
        <Calendar05Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "calendar-06":
      return (
        <Calendar06Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "calendar-07":
      return (
        <Calendar07Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "calendar-check":
      return (
        <CalendarCheckIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "calendar-minus":
      return (
        <CalendarMinusIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "calendar-number":
      return (
        <CalendarNumberIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "calendar-plus":
      return (
        <CalendarPlusIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "camera-01":
      return (
        <Camera01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "camera-02":
      return (
        <Camera02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "camera-lens":
      return (
        <CameraLensIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "camera-off":
      return (
        <CameraOffIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "cancel-left":
      return (
        <CancelLeftIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "cancel-right":
      return (
        <CancelRightIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "car":
      return (
        <CarIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "car-1":
      return (
        <Car1Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "card-01":
      return (
        <Card01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "card-02":
      return (
        <Card02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "card-add":
      return (
        <CardAddIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "card-check":
      return (
        <CardCheckIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "card-down":
      return (
        <CardDownIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "card-edit":
      return (
        <CardEditIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "card-lock":
      return (
        <CardLockIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "card-minus":
      return (
        <CardMinusIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "card-number":
      return (
        <CardNumberIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "card-shield":
      return (
        <CardShieldIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "card-up":
      return (
        <CardUpIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "card-x":
      return (
        <CardXIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "cart":
      return (
        <CartIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "center":
      return (
        <CenterIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "chart-breakout-circle":
      return (
        <ChartBreakoutCircleIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "chart-breakout-square":
      return (
        <ChartBreakoutSquareIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "check-01":
      return (
        <Check01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "check-02":
      return (
        <Check02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "check-broken":
      return (
        <CheckBrokenIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "check-contained":
      return (
        <CheckContainedIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "check-square-broken":
      return (
        <CheckSquareBrokenIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "check-square-contained":
      return (
        <CheckSquareContainedIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "chevron-double-down":
      return (
        <ChevronDoubleDownIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "chevron-double-left":
      return (
        <ChevronDoubleLeftIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "chevron-double-right":
      return (
        <ChevronDoubleRightIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "chevron-double-up":
      return (
        <ChevronDoubleUpIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "chevron-down":
      return (
        <ChevronDownIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "chevron-left":
      return (
        <ChevronLeftIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "chevron-right":
      return (
        <ChevronRightIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "chevron-up":
      return (
        <ChevronUpIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "chromecast":
      return (
        <ChromecastIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "circle":
      return (
        <CircleIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "clock-01":
      return (
        <Clock01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "clock-backward":
      return (
        <ClockBackwardIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "clock-check":
      return (
        <ClockCheckIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "clock-forward":
      return (
        <ClockForwardIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "clock-plus":
      return (
        <ClockPlusIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "close":
      return (
        <CloseIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "cloud-01":
      return (
        <Cloud01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "cloud-02":
      return (
        <Cloud02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "cloud-03":
      return (
        <Cloud03Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "cloud-04":
      return (
        <Cloud04Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "cloud-lightning":
      return (
        <CloudLightningIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "cloud-rain":
      return (
        <CloudRainIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "cloud-snow":
      return (
        <CloudSnowIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "cloud-sun":
      return (
        <CloudSunIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "code-01":
      return (
        <Code01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "code-02":
      return (
        <Code02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "code-03":
      return (
        <Code03Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "code-04":
      return (
        <Code04Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "coin-broken":
      return (
        <CoinBrokenIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "coin-hand":
      return (
        <CoinHandIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "coin-number":
      return (
        <CoinNumberIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "coin-unbroken":
      return (
        <CoinUnbrokenIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "coins":
      return (
        <CoinsIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "coins-rotate":
      return (
        <CoinsRotateIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "color-picker":
      return (
        <ColorPickerIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "color-swatch-01":
      return (
        <ColorSwatch01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "color-swatch-02":
      return (
        <ColorSwatch02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "colors-01":
      return (
        <Colors01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "colors-02":
      return (
        <Colors02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "column-horizontal-01":
      return (
        <ColumnHorizontal01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "column-horizontal-02":
      return (
        <ColumnHorizontal02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "column-horizontal-03":
      return (
        <ColumnHorizontal03Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "column-vertical-01":
      return (
        <ColumnVertical01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "column-vertical-02":
      return (
        <ColumnVertical02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "column-vertical-03":
      return (
        <ColumnVertical03Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "compare":
      return (
        <CompareIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "compass":
      return (
        <CompassIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "compass-1":
      return (
        <Compass1Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "compass-2":
      return (
        <Compass2Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "component":
      return (
        <ComponentIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "computer":
      return (
        <ComputerIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "contrast":
      return (
        <ContrastIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "copy-left":
      return (
        <CopyLeftIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "copy-right":
      return (
        <CopyRightIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "crop-01":
      return (
        <Crop01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "crop-02":
      return (
        <Crop02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "currency-bath":
      return (
        <CurrencyBathIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "currency-bitcoin":
      return (
        <CurrencyBitcoinIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "currency-cent":
      return (
        <CurrencyCentIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "currency-coin-bath":
      return (
        <CurrencyCoinBathIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "currency-coin-bitcoin":
      return (
        <CurrencyCoinBitcoinIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "currency-coin-cent":
      return (
        <CurrencyCoinCentIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "currency-coin-dollar":
      return (
        <CurrencyCoinDollarIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "currency-coin-euro":
      return (
        <CurrencyCoinEuroIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "currency-coin-pound":
      return (
        <CurrencyCoinPoundIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "currency-coin-rubel":
      return (
        <CurrencyCoinRubelIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "currency-coin-rupee":
      return (
        <CurrencyCoinRupeeIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "currency-coin-yen":
      return (
        <CurrencyCoinYenIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "currency-dollar":
      return (
        <CurrencyDollarIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "currency-euro":
      return (
        <CurrencyEuroIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "currency-pound":
      return (
        <CurrencyPoundIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "currency-rubel":
      return (
        <CurrencyRubelIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "currency-rupee":
      return (
        <CurrencyRupeeIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "currency-yen":
      return (
        <CurrencyYenIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "cursor-01":
      return (
        <Cursor01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "cursor-02":
      return (
        <Cursor02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "cursor-03":
      return (
        <Cursor03Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "cursor-04":
      return (
        <Cursor04Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "cursor-05":
      return (
        <Cursor05Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "cursor-06":
      return (
        <Cursor06Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "cursor-arrow":
      return (
        <CursorArrowIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "dash":
      return (
        <DashIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "data-01":
      return (
        <Data01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "data-02":
      return (
        <Data02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "data-03":
      return (
        <Data03Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "data-04":
      return (
        <Data04Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "delete":
      return (
        <DeleteIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "delivery":
      return (
        <DeliveryIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "diamond":
      return (
        <DiamondIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "diamond-1":
      return (
        <Diamond1Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "disc":
      return (
        <DiscIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "discount-circle":
      return (
        <DiscountCircleIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "discount-square":
      return (
        <DiscountSquareIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "discount-star-01":
      return (
        <DiscountStar01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "discount-star-02":
      return (
        <DiscountStar02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "discount-star-03":
      return (
        <DiscountStar03Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "divider":
      return (
        <DividerIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "dot-horizontal":
      return (
        <DotHorizontalIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "dot-vertical":
      return (
        <DotVerticalIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "down-arrow":
      return (
        <DownArrowIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "down-arrow-sm":
      return (
        <DownArrowSmIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "download":
      return (
        <DownloadIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "download-01":
      return (
        <Download01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "download-02":
      return (
        <Download02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "drop":
      return (
        <DropIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "drop-1":
      return (
        <Drop1Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "edit-01":
      return (
        <Edit01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "edit-02":
      return (
        <Edit02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "edit-03":
      return (
        <Edit03Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "edit-04":
      return (
        <Edit04Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "edit-contained":
      return (
        <EditContainedIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "email":
      return (
        <EmailIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "embed":
      return (
        <EmbedIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "equals":
      return (
        <EqualsIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "equals-not":
      return (
        <EqualsNotIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "eraser-01":
      return (
        <Eraser01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "eraser-02":
      return (
        <Eraser02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "expand":
      return (
        <ExpandIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "expand-02":
      return (
        <Expand02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "eye-closed":
      return (
        <EyeClosedIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "eye-open":
      return (
        <EyeOpenIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "face-id-01":
      return (
        <FaceId01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "face-id-02":
      return (
        <FaceId02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "fast-backward":
      return (
        <FastBackwardIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "fast-forward":
      return (
        <FastForwardIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "favourite":
      return (
        <FavouriteIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "feather-01":
      return (
        <Feather01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "feather-02":
      return (
        <Feather02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "file":
      return (
        <FileIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "file-01":
      return (
        <File01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "file-02":
      return (
        <File02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "file-03":
      return (
        <File03Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "file-04":
      return (
        <File04Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "file-05":
      return (
        <File05Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "file-06":
      return (
        <File06Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "file-attach-01":
      return (
        <FileAttach01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "file-attach-02":
      return (
        <FileAttach02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "file-attach-03":
      return (
        <FileAttach03Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "file-branch":
      return (
        <FileBranchIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "file-check-01":
      return (
        <FileCheck01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "file-check-02":
      return (
        <FileCheck02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "file-code":
      return (
        <FileCodeIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "file-down-01":
      return (
        <FileDown01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "file-down-02":
      return (
        <FileDown02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "file-edit-01":
      return (
        <FileEdit01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "file-edit-02":
      return (
        <FileEdit02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "file-eye-01":
      return (
        <FileEye01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "file-eye-02":
      return (
        <FileEye02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "file-lock-01":
      return (
        <FileLock01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "file-lock-02":
      return (
        <FileLock02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "file-lock-03":
      return (
        <FileLock03Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "file-minus-01":
      return (
        <FileMinus01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "file-minus-02":
      return (
        <FileMinus02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "file-multiple":
      return (
        <FileMultipleIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "file-none":
      return (
        <FileNoneIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "file-plus-01":
      return (
        <FilePlus01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "file-plus-02":
      return (
        <FilePlus02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "file-question-01":
      return (
        <FileQuestion01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "file-question-02":
      return (
        <FileQuestion02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "file-return-01":
      return (
        <FileReturn01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "file-return-02":
      return (
        <FileReturn02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "file-search-01":
      return (
        <FileSearch01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "file-search-02":
      return (
        <FileSearch02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "file-shield-01":
      return (
        <FileShield01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "file-shield-02":
      return (
        <FileShield02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "file-shield-03":
      return (
        <FileShield03Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "file-shred":
      return (
        <FileShredIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "file-up-01":
      return (
        <FileUp01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "file-up-02":
      return (
        <FileUp02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "file-x02":
      return (
        <FileX02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "filter":
      return (
        <FilterIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "fingerpint-01":
      return (
        <Fingerpint01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "fingerpint-02":
      return (
        <Fingerpint02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "flame-01":
      return (
        <Flame01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "flash-off":
      return (
        <FlashOffIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "flash-on":
      return (
        <FlashOnIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "flex-align-bottom-01":
      return (
        <FlexAlignBottom01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "flex-align-center-01":
      return (
        <FlexAlignCenter01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "flex-align-left-01":
      return (
        <FlexAlignLeft01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "flex-align-right-01":
      return (
        <FlexAlignRight01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "flex-align-spaced-01":
      return (
        <FlexAlignSpaced01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "flex-align-top-01":
      return (
        <FlexAlignTop01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "flex-columns":
      return (
        <FlexColumnsIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "flex-rows":
      return (
        <FlexRowsIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "flip-01":
      return (
        <Flip01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "flip-02":
      return (
        <Flip02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "flip-left":
      return (
        <FlipLeftIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "flip-right":
      return (
        <FlipRightIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "folder":
      return (
        <FolderIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "folder-code":
      return (
        <FolderCodeIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "folder-down-01":
      return (
        <FolderDown01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "folder-down-02":
      return (
        <FolderDown02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "folder-minus-01":
      return (
        <FolderMinus01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "folder-minus-011":
      return (
        <FolderMinus011Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "folder-open-01":
      return (
        <FolderOpen01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "folder-open-02":
      return (
        <FolderOpen02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "folder-open-03":
      return (
        <FolderOpen03Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "folder-plus-01":
      return (
        <FolderPlus01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "folder-plus-02":
      return (
        <FolderPlus02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "folder-search-01":
      return (
        <FolderSearch01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "folder-search-02":
      return (
        <FolderSearch02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "folder-shield":
      return (
        <FolderShieldIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "folder-up-01":
      return (
        <FolderUp01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "folder-up-02":
      return (
        <FolderUp02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "folder-x01":
      return (
        <FolderX01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "folder-x02":
      return (
        <FolderX02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "gear":
      return (
        <GearIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "gift-01":
      return (
        <Gift01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "gift-02":
      return (
        <Gift02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "git-branch-01":
      return (
        <GitBranch01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "git-branch-02":
      return (
        <GitBranch02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "git-branch-03":
      return (
        <GitBranch03Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "git-branch-04":
      return (
        <GitBranch04Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "git-branch-05":
      return (
        <GitBranch05Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "glasses-01":
      return (
        <Glasses01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "glasses-011":
      return (
        <Glasses011Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "glasses-012":
      return (
        <Glasses012Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "glasses-02":
      return (
        <Glasses02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "globe":
      return (
        <GlobeIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "globe-01":
      return (
        <Globe01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "globe-011":
      return (
        <Globe011Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "globe-02":
      return (
        <Globe02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "globe-021":
      return (
        <Globe021Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "globe-03":
      return (
        <Globe03Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "globe-04":
      return (
        <Globe04Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "globe-05":
      return (
        <Globe05Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "graduation-cap-01":
      return (
        <GraduationCap01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "graduation-cap-02":
      return (
        <GraduationCap02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "grid-01":
      return (
        <Grid01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "grid-02":
      return (
        <Grid02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "grid-03":
      return (
        <Grid03Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "grid-04-filled":
      return (
        <Grid04FilledIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "hash-01":
      return (
        <Hash01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "hash-02":
      return (
        <Hash02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "header-01":
      return (
        <Header01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "header-02":
      return (
        <Header02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "headphones":
      return (
        <HeadphonesIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "heart":
      return (
        <HeartIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "help":
      return (
        <HelpIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "help-circle-contained":
      return (
        <HelpCircleContainedIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "help-square-contained":
      return (
        <HelpSquareContainedIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "hexagon":
      return (
        <HexagonIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "home-01":
      return (
        <Home01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "home-02":
      return (
        <Home02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "home-03":
      return (
        <Home03Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "home-04":
      return (
        <Home04Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "home-05":
      return (
        <Home05Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "horizontal-chart-01":
      return (
        <HorizontalChart01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "horizontal-chart-02":
      return (
        <HorizontalChart02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "horizontal-chart-03":
      return (
        <HorizontalChart03Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "hourglass-01":
      return (
        <Hourglass01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "hourglass-02":
      return (
        <Hourglass02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "hourglass-03":
      return (
        <Hourglass03Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "image":
      return (
        <ImageIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "image-01":
      return (
        <Image01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "image-02":
      return (
        <Image02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "image-03":
      return (
        <Image03Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "image-04":
      return (
        <Image04Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "image-add":
      return (
        <ImageAddIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "image-avatar":
      return (
        <ImageAvatarIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "image-check":
      return (
        <ImageCheckIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "image-down":
      return (
        <ImageDownIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "image-focus":
      return (
        <ImageFocusIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "image-indent-left":
      return (
        <ImageIndentLeftIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "image-indent-right":
      return (
        <ImageIndentRightIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "image-minus":
      return (
        <ImageMinusIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "image-no-borders":
      return (
        <ImageNoBordersIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "image-question":
      return (
        <ImageQuestionIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "image-up":
      return (
        <ImageUpIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "image-x":
      return (
        <ImageXIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "inbox-01":
      return (
        <Inbox01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "inbox-02":
      return (
        <Inbox02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "indent-decrease":
      return (
        <IndentDecreaseIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "indent-increase":
      return (
        <IndentIncreaseIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "indent-left":
      return (
        <IndentLeftIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "indent-right":
      return (
        <IndentRightIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "info-square-01-contained":
      return (
        <InfoSquare01ContainedIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "info-square-02-contained-filled":
      return (
        <InfoSquare02ContainedFilledIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "information-circle-contained":
      return (
        <InformationCircleContainedIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "intersect":
      return (
        <IntersectIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "iphone-02":
      return (
        <Iphone02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "italics-01":
      return (
        <Italics01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "italics-02":
      return (
        <Italics02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "key-01":
      return (
        <Key01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "key-02":
      return (
        <Key02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "keyboard":
      return (
        <KeyboardIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "laptop-01":
      return (
        <Laptop01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "laptop-02":
      return (
        <Laptop02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "layers-01":
      return (
        <Layers01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "layers-02":
      return (
        <Layers02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "layers-03":
      return (
        <Layers03Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "layers-04":
      return (
        <Layers04Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "layers-05":
      return (
        <Layers05Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "layout-01":
      return (
        <Layout01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "layout-02":
      return (
        <Layout02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "layout-03":
      return (
        <Layout03Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "layout-04":
      return (
        <Layout04Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "layout-bottom":
      return (
        <LayoutBottomIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "layout-grid-01":
      return (
        <LayoutGrid01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "layout-left":
      return (
        <LayoutLeftIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "layout-right":
      return (
        <LayoutRightIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "layout-scale":
      return (
        <LayoutScaleIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "layout-top":
      return (
        <LayoutTopIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "letter-spacing-01":
      return (
        <LetterSpacing01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "letter-spacing-02":
      return (
        <LetterSpacing02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "letter-spacing-03":
      return (
        <LetterSpacing03Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "lightbulb-01":
      return (
        <Lightbulb01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "lightbulb-02":
      return (
        <Lightbulb02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "lightbulb-03":
      return (
        <Lightbulb03Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "lightning-01":
      return (
        <Lightning01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "lightning-02":
      return (
        <Lightning02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "lightning-circle-contained":
      return (
        <LightningCircleContainedIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "lightning-filled":
      return (
        <LightningFilledIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "lightning-square-contained":
      return (
        <LightningSquareContainedIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "line-chart-down-01":
      return (
        <LineChartDown01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "line-chart-down-02":
      return (
        <LineChartDown02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "line-chart-up-01":
      return (
        <LineChartUp01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "line-chart-up-02":
      return (
        <LineChartUp02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "line-height":
      return (
        <LineHeightIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "link":
      return (
        <LinkIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "link-angled":
      return (
        <LinkAngledIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "link-broken":
      return (
        <LinkBrokenIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "link-external":
      return (
        <LinkExternalIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "list":
      return (
        <ListIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "list-1":
      return (
        <List1Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "list-numbers":
      return (
        <ListNumbersIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "loader-01":
      return (
        <Loader01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "loader-02":
      return (
        <Loader02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "lock-01":
      return (
        <Lock01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "lock-02":
      return (
        <Lock02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "lock-03":
      return (
        <Lock03Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "lock-04":
      return (
        <Lock04Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "lock-open-01":
      return (
        <LockOpen01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "lock-open-02":
      return (
        <LockOpen02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "lock-open-03":
      return (
        <LockOpen03Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "lock-open-04":
      return (
        <LockOpen04Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "logout-01":
      return (
        <Logout01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "logout-02":
      return (
        <Logout02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "logout-03":
      return (
        <Logout03Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "logout-04":
      return (
        <Logout04Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "luggage-01":
      return (
        <Luggage01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "luggage-02":
      return (
        <Luggage02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "luggage-03":
      return (
        <Luggage03Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "luggage-04":
      return (
        <Luggage04Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "mail-01":
      return (
        <Mail01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "mail-02":
      return (
        <Mail02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "mail-03":
      return (
        <Mail03Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "mail-04":
      return (
        <Mail04Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "mail-05":
      return (
        <Mail05Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "map-01":
      return (
        <Map01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "map-011":
      return (
        <Map011Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "map-02":
      return (
        <Map02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "map-03":
      return (
        <Map03Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "map-04":
      return (
        <Map04Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "marker-01":
      return (
        <Marker01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "marker-02":
      return (
        <Marker02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "marker-03":
      return (
        <Marker03Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "marker-04":
      return (
        <Marker04Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "marker-05":
      return (
        <Marker05Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "marker-06":
      return (
        <Marker06Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "maximise-01":
      return (
        <Maximise01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "maximise-02":
      return (
        <Maximise02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "media-strip-01":
      return (
        <MediaStrip01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "media-strip-02":
      return (
        <MediaStrip02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "menu-01":
      return (
        <Menu01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "menu-02":
      return (
        <Menu02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "menu-03":
      return (
        <Menu03Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "menu-04":
      return (
        <Menu04Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "menu-05":
      return (
        <Menu05Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "message-alert-circle":
      return (
        <MessageAlertCircleIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "message-alert-plus":
      return (
        <MessageAlertPlusIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "message-chat-01":
      return (
        <MessageChat01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "message-chat-011":
      return (
        <MessageChat011Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "message-circle":
      return (
        <MessageCircleIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "message-notify-circle":
      return (
        <MessageNotifyCircleIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "message-notify-square":
      return (
        <MessageNotifySquareIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "message-square":
      return (
        <MessageSquareIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "message-square-alert":
      return (
        <MessageSquareAlertIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "message-square-information":
      return (
        <MessageSquareInformationIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "message-square-plus":
      return (
        <MessageSquarePlusIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "message-square-plus-1":
      return (
        <MessageSquarePlus1Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "message-square-typing":
      return (
        <MessageSquareTypingIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "message-square-x":
      return (
        <MessageSquareXIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "message-text-01":
      return (
        <MessageText01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "message-text-02":
      return (
        <MessageText02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "message-typing":
      return (
        <MessageTypingIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "message-x":
      return (
        <MessageXIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "microphone-01":
      return (
        <Microphone01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "microphone-02":
      return (
        <Microphone02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "microphone-off-01":
      return (
        <MicrophoneOff01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "microphone-off-02":
      return (
        <MicrophoneOff02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "minimise-01":
      return (
        <Minimise01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "minimise-02":
      return (
        <Minimise02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "minus-circle-contained":
      return (
        <MinusCircleContainedIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "minus-square-contained":
      return (
        <MinusSquareContainedIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "moon-01":
      return (
        <Moon01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "moon-02":
      return (
        <Moon02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "mouse":
      return (
        <MouseIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "move":
      return (
        <MoveIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "note-01":
      return (
        <Note01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "note-02":
      return (
        <Note02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "notification-box":
      return (
        <NotificationBoxIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "notification-bubble":
      return (
        <NotificationBubbleIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "notification-square-01":
      return (
        <NotificationSquare01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "notification-square-02":
      return (
        <NotificationSquare02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "octagon":
      return (
        <OctagonIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "open":
      return (
        <OpenIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "overlap":
      return (
        <OverlapIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "package-01":
      return (
        <Package01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "package-02":
      return (
        <Package02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "package-check":
      return (
        <PackageCheckIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "package-minus":
      return (
        <PackageMinusIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "package-plus":
      return (
        <PackagePlusIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "package-x":
      return (
        <PackageXIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "paint-bucket-01":
      return (
        <PaintBucket01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "paint-bucket-02":
      return (
        <PaintBucket02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "palette":
      return (
        <PaletteIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "paperclip":
      return (
        <PaperclipIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "paperclip-01":
      return (
        <Paperclip01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "paperclip-02":
      return (
        <Paperclip02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "passport":
      return (
        <PassportIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "password-01":
      return (
        <Password01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "password-02":
      return (
        <Password02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "pause-01":
      return (
        <Pause01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "pause-02":
      return (
        <Pause02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "pause-03":
      return (
        <Pause03Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "pen-tool-01":
      return (
        <PenTool01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "pen-tool-02":
      return (
        <PenTool02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "pen-tool-03":
      return (
        <PenTool03Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "pen-tool-04":
      return (
        <PenTool04Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "pencil-01":
      return (
        <Pencil01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "pencil-02":
      return (
        <Pencil02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "pencil-03":
      return (
        <Pencil03Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "pentagon":
      return (
        <PentagonIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "percent-01":
      return (
        <Percent01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "percent-02":
      return (
        <Percent02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "percent-03":
      return (
        <Percent03Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "perspective":
      return (
        <PerspectiveIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "phone":
      return (
        <PhoneIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "phone-call-01":
      return (
        <PhoneCall01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "phone-call-02":
      return (
        <PhoneCall02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "phone-down":
      return (
        <PhoneDownIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "phone-incoming-01":
      return (
        <PhoneIncoming01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "phone-incoming-02":
      return (
        <PhoneIncoming02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "phone-off":
      return (
        <PhoneOffIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "phone-outgoing-01":
      return (
        <PhoneOutgoing01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "phone-outgoing-02":
      return (
        <PhoneOutgoing02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "phone-up":
      return (
        <PhoneUpIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "phone-x":
      return (
        <PhoneXIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "pie-chart-01":
      return (
        <PieChart01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "pie-chart-02":
      return (
        <PieChart02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "pie-chart-03":
      return (
        <PieChart03Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "plane":
      return (
        <PlaneIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "play-01":
      return (
        <Play01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "play-02":
      return (
        <Play02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "play-03":
      return (
        <Play03Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "plug-01":
      return (
        <Plug01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "plus-01":
      return (
        <Plus01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "plus-02":
      return (
        <Plus02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "plus-03":
      return (
        <Plus03Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "pointer-01":
      return (
        <Pointer01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "pointer-02":
      return (
        <Pointer02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "pointing":
      return (
        <PointingIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "power":
      return (
        <PowerIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "presentation-01":
      return (
        <Presentation01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "presentation-02":
      return (
        <Presentation02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "presentation-03":
      return (
        <Presentation03Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "progress":
      return (
        <ProgressIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "quote":
      return (
        <QuoteIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "receipt":
      return (
        <ReceiptIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "receipt-lines":
      return (
        <ReceiptLinesIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "refresh-01":
      return (
        <Refresh01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "refresh-011":
      return (
        <Refresh011Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "rss":
      return (
        <RssIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "ruler":
      return (
        <RulerIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "save-01":
      return (
        <Save01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "save-02":
      return (
        <Save02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "scale-01":
      return (
        <Scale01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "scale-02":
      return (
        <Scale02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "scale-03":
      return (
        <Scale03Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "scan":
      return (
        <ScanIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "scan-1":
      return (
        <Scan1Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "scissors-01":
      return (
        <Scissors01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "scissors-02":
      return (
        <Scissors02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "scissors-03":
      return (
        <Scissors03Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "scissors-04":
      return (
        <Scissors04Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "search-01":
      return (
        <Search01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "search-02":
      return (
        <Search02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "send-01":
      return (
        <Send01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "send-02":
      return (
        <Send02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "send-03":
      return (
        <Send03Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "server-01":
      return (
        <Server01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "server-02":
      return (
        <Server02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "server-03":
      return (
        <Server03Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "server-04":
      return (
        <Server04Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "server-05":
      return (
        <Server05Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "server-06":
      return (
        <Server06Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "server-down":
      return (
        <ServerDownIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "server-up":
      return (
        <ServerUpIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "settings":
      return (
        <SettingsIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "share":
      return (
        <ShareIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "share-1":
      return (
        <Share1Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "shield-01":
      return (
        <Shield01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "shield-02":
      return (
        <Shield02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "shield-check":
      return (
        <ShieldCheckIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "shield-plus":
      return (
        <ShieldPlusIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "shuffle":
      return (
        <ShuffleIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "signal":
      return (
        <SignalIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "skew":
      return (
        <SkewIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "skip-back":
      return (
        <SkipBackIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "skip-forward":
      return (
        <SkipForwardIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "slash-01-backward":
      return (
        <Slash01BackwardIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "slash-01-forward":
      return (
        <Slash01ForwardIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "slash-02-forward":
      return (
        <Slash02ForwardIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "slash-02-forward-1":
      return (
        <Slash02Forward1Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "smiley-happy":
      return (
        <SmileyHappyIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "smiley-happy-plus":
      return (
        <SmileyHappyPlusIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "smiley-neutral":
      return (
        <SmileyNeutralIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "smiley-sad":
      return (
        <SmileySadIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "smiley-wink":
      return (
        <SmileyWinkIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "snowflake":
      return (
        <SnowflakeIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "sort-horizontal":
      return (
        <SortHorizontalIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "sort-vertical-01":
      return (
        <SortVertical01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "sort-vertical-02":
      return (
        <SortVertical02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "space-height":
      return (
        <SpaceHeightIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "space-horizontal":
      return (
        <SpaceHorizontalIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "space-vertical":
      return (
        <SpaceVerticalIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "space-width":
      return (
        <SpaceWidthIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "speaker":
      return (
        <SpeakerIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "square":
      return (
        <SquareIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "star-01":
      return (
        <Star01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "star-02":
      return (
        <Star02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "stars":
      return (
        <StarsIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "stop-01":
      return (
        <Stop01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "stop-02":
      return (
        <Stop02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "stop-circle-contained":
      return (
        <StopCircleContainedIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "stopwatch-01":
      return (
        <Stopwatch01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "stopwatch-02":
      return (
        <Stopwatch02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "stopwatch-03":
      return (
        <Stopwatch03Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "stopwatch-04":
      return (
        <Stopwatch04Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "stopwatch-05":
      return (
        <Stopwatch05Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "stopwatch-off":
      return (
        <StopwatchOffIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "stopwatch-snooze":
      return (
        <StopwatchSnoozeIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "sun-01":
      return (
        <Sun01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "sun-02":
      return (
        <Sun02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "sun-03":
      return (
        <Sun03Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "sun-down":
      return (
        <SunDownIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "sun-up":
      return (
        <SunUpIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "superscript":
      return (
        <SuperscriptIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "table":
      return (
        <TableIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "tag":
      return (
        <TagIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "target-01":
      return (
        <Target01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "target-011":
      return (
        <Target011Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "target-02":
      return (
        <Target02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "target-021":
      return (
        <Target021Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "target-03":
      return (
        <Target03Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "target-04":
      return (
        <Target04Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "temperature-01":
      return (
        <Temperature01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "temperature-02":
      return (
        <Temperature02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "temperature-03":
      return (
        <Temperature03Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "temperature-04":
      return (
        <Temperature04Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "terminal":
      return (
        <TerminalIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "text-input-01":
      return (
        <TextInput01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "text-input-02":
      return (
        <TextInput02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "thumb-down":
      return (
        <ThumbDownIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "thumb-up":
      return (
        <ThumbUpIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "ticket-01":
      return (
        <Ticket01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "ticket-02":
      return (
        <Ticket02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "toggle-right":
      return (
        <ToggleRightIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "toogle-left":
      return (
        <ToogleLeftIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "train":
      return (
        <TrainIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "train-1":
      return (
        <Train1Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "transform":
      return (
        <TransformIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "trash-01":
      return (
        <Trash01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "trash-02":
      return (
        <Trash02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "trash-03":
      return (
        <Trash03Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "trash-04":
      return (
        <Trash04Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "trend-down-01":
      return (
        <TrendDown01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "trend-down-02":
      return (
        <TrendDown02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "trend-up-01":
      return (
        <TrendUp01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "trend-up-02":
      return (
        <TrendUp02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "triangle":
      return (
        <TriangleIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "truck":
      return (
        <TruckIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "tv":
      return (
        <TvIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "type-01":
      return (
        <Type01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "type-02":
      return (
        <Type02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "type-03":
      return (
        <Type03Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "type-strike-01":
      return (
        <TypeStrike01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "type-strike-02":
      return (
        <TypeStrike02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "umbrella":
      return (
        <UmbrellaIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "umbrella-01":
      return (
        <Umbrella01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "umbrella-02":
      return (
        <Umbrella02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "underline-01":
      return (
        <Underline01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "underline-02":
      return (
        <Underline02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "union":
      return (
        <UnionIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "upload-01":
      return (
        <Upload01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "upload-02":
      return (
        <Upload02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "upload-03":
      return (
        <Upload03Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "upload-04":
      return (
        <Upload04Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "user-profile-01":
      return (
        <UserProfile01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "user-profile-02":
      return (
        <UserProfile02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "user-profile-03":
      return (
        <UserProfile03Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "user-profile-031":
      return (
        <UserProfile031Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "user-profile-add-01":
      return (
        <UserProfileAdd01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "user-profile-add-02":
      return (
        <UserProfileAdd02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "user-profile-check":
      return (
        <UserProfileCheckIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "user-profile-circle":
      return (
        <UserProfileCircleIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "user-profile-down":
      return (
        <UserProfileDownIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "user-profile-group":
      return (
        <UserProfileGroupIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "user-profile-left":
      return (
        <UserProfileLeftIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "user-profile-minus":
      return (
        <UserProfileMinusIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "user-profile-right":
      return (
        <UserProfileRightIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "user-profile-square":
      return (
        <UserProfileSquareIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "user-profile-star":
      return (
        <UserProfileStarIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "user-profile-up":
      return (
        <UserProfileUpIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "user-profile-x":
      return (
        <UserProfileXIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "users-profiles-01":
      return (
        <UsersProfiles01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "users-profiles-02":
      return (
        <UsersProfiles02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "users-profiles-03":
      return (
        <UsersProfiles03Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "users-profiles-check":
      return (
        <UsersProfilesCheckIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "users-profiles-down":
      return (
        <UsersProfilesDownIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "users-profiles-left":
      return (
        <UsersProfilesLeftIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "users-profiles-minus":
      return (
        <UsersProfilesMinusIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "users-profiles-plus":
      return (
        <UsersProfilesPlusIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "users-profiles-right":
      return (
        <UsersProfilesRightIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "users-profiles-up":
      return (
        <UsersProfilesUpIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "users-profiles-x":
      return (
        <UsersProfilesXIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "variant":
      return (
        <VariantIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "video-off":
      return (
        <VideoOffIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "video-on":
      return (
        <VideoOnIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "volume-01":
      return (
        <Volume01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "volume-02":
      return (
        <Volume02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "volume-03":
      return (
        <Volume03Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "volume-04":
      return (
        <Volume04Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "volume-05":
      return (
        <Volume05Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "volume-06":
      return (
        <Volume06Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "volume-07":
      return (
        <Volume07Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "wallert-04":
      return (
        <Wallert04Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "wallet-01":
      return (
        <Wallet01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "wallet-02":
      return (
        <Wallet02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "wallet-03":
      return (
        <Wallet03Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "watch-01":
      return (
        <Watch01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "watch-02":
      return (
        <Watch02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "waveform":
      return (
        <WaveformIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "webcam":
      return (
        <WebcamIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "wifi-off":
      return (
        <WifiOffIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "wifi-on":
      return (
        <WifiOnIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "wind-01":
      return (
        <Wind01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "wind-02":
      return (
        <Wind02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "wind-03":
      return (
        <Wind03Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "wrench":
      return (
        <WrenchIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "x-circle-contained":
      return (
        <XCircleContainedIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "x-square-contained":
      return (
        <XSquareContainedIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "x01":
      return (
        <X01Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "x02":
      return (
        <X02Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "x03":
      return (
        <X03Icon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "youtube":
      return (
        <YoutubeIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "zoom-in":
      return (
        <ZoomInIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
    case "zoom-out":
      return (
        <ZoomOutIcon
          color={color}
          width={width}
          height={height}
          {...svgProps}
          className={className}
        />
      );
  }
}

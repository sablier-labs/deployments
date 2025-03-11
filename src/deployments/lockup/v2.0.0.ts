import { ChainId } from "../../chains/ids";
import contractNames from "../../contract-names";
import { getDeployment } from "../../helpers";

/* -------------------------------------------------------------------------- */
/*                                  Mainnets                                  */
/* -------------------------------------------------------------------------- */

const mainnets = [
  getDeployment("lockup", ChainId.ETHEREUM, [
    {
      address: "0x3F6E8a8Cffe377c4649aCeB01e6F20c60fAA356c",
      name: contractNames.lockup.SABLIER_BATCH_LOCKUP,
    },
    {
      address: "0x7C01AA3783577E15fD7e272443D44B92d5b21056",
      name: contractNames.lockup.SABLIER_LOCKUP,
    },
    {
      address: "0xA9dC6878C979B5cc1d98a1803F0664ad725A1f56",
      name: contractNames.lockup.LOCKUP_NFT_DESCRIPTOR,
    },
    {
      address: "0xf8076E4Fb5cfE8be1C26E61222DC51828Db8C1dc",
      name: contractNames.lockup.HELPERS,
    },
    {
      address: "0x5522CA06Ce080800AB59BA4C091e63f6f54C5E6d",
      name: contractNames.lockup.VESTING_MATH,
    },
  ]),
  getDeployment("lockup", ChainId.ABSTRACT, [
    {
      address: "0x3409308357BB704f79f70d748da502F363Dc2f1D",
      name: contractNames.lockup.SABLIER_BATCH_LOCKUP,
    },
    {
      address: "0x14Eb4AB47B2ec2a71763eaBa202a252E176FAE88",
      name: contractNames.lockup.SABLIER_LOCKUP,
    },
    {
      address: "0x63Ff2E370788C163D5a1909B5FCb299DB327AEF9",
      name: contractNames.lockup.LOCKUP_NFT_DESCRIPTOR,
    },
    {
      address: "0x07c194dFE7DCe9Ae7Ffe4bF32683cf1F8CDD4aEa",
      name: contractNames.lockup.HELPERS,
    },
    {
      address: "0xbB2e2884AE40003BB55fd3A85A9f8f7f72Aa441F",
      name: contractNames.lockup.VESTING_MATH,
    },
  ]),
  getDeployment("lockup", ChainId.ARBITRUM_ONE, [
    {
      address: "0xB11Ead48F572155C5F8dB6201701e91A936896f7",
      name: contractNames.lockup.SABLIER_BATCH_LOCKUP,
    },
    {
      address: "0x467D5Bf8Cfa1a5f99328fBdCb9C751c78934b725",
      name: contractNames.lockup.SABLIER_LOCKUP,
    },
    {
      address: "0xd5c6a0Dd2E1822865c308850b8b3E2CcE762D061",
      name: contractNames.lockup.LOCKUP_NFT_DESCRIPTOR,
    },
    {
      address: "0xf8076E4Fb5cfE8be1C26E61222DC51828Db8C1dc",
      name: contractNames.lockup.HELPERS,
    },
    {
      address: "0x5522CA06Ce080800AB59BA4C091e63f6f54C5E6d",
      name: contractNames.lockup.VESTING_MATH,
    },
  ]),
  getDeployment("lockup", ChainId.AVALANCHE, [
    {
      address: "0xABDE228d84D86D78029C31A37Ae2435C8f923c8b",
      name: contractNames.lockup.SABLIER_BATCH_LOCKUP,
    },
    {
      address: "0x3C81BBBe72EF8eF3fb1D19B0bd6310Ad0dd27E82",
      name: contractNames.lockup.SABLIER_LOCKUP,
    },
    {
      address: "0x906A4BD5dD0EF13654eA29bFD6185d0d64A4b674",
      name: contractNames.lockup.LOCKUP_NFT_DESCRIPTOR,
    },
    {
      address: "0xf8076E4Fb5cfE8be1C26E61222DC51828Db8C1dc",
      name: contractNames.lockup.HELPERS,
    },
    {
      address: "0x5522CA06Ce080800AB59BA4C091e63f6f54C5E6d",
      name: contractNames.lockup.VESTING_MATH,
    },
  ]),
  getDeployment("lockup", ChainId.BASE, [
    {
      address: "0xC26CdAFd6ec3c91AD9aEeB237Ee1f37205ED26a4",
      name: contractNames.lockup.SABLIER_BATCH_LOCKUP,
    },
    {
      address: "0xb5D78DD3276325f5FAF3106Cc4Acc56E28e0Fe3B",
      name: contractNames.lockup.SABLIER_LOCKUP,
    },
    {
      address: "0x87e437030b7439150605a641483de98672E26317",
      name: contractNames.lockup.LOCKUP_NFT_DESCRIPTOR,
    },
    {
      address: "0xf8076E4Fb5cfE8be1C26E61222DC51828Db8C1dc",
      name: contractNames.lockup.HELPERS,
    },
    {
      address: "0x5522CA06Ce080800AB59BA4C091e63f6f54C5E6d",
      name: contractNames.lockup.VESTING_MATH,
    },
  ]),
  getDeployment("lockup", ChainId.BERACHAIN, [
    {
      address: "0x75838C66Dfa2296bB9758f75fC7ad219718C8a88",
      name: contractNames.lockup.SABLIER_BATCH_LOCKUP,
    },
    {
      address: "0xC19A2542156b5d7960e0eF46E9787E7d336cF428",
      name: contractNames.lockup.SABLIER_LOCKUP,
    },
    {
      address: "0x3bbE0a21792564604B0fDc00019532Adeffa70eb",
      name: contractNames.lockup.LOCKUP_NFT_DESCRIPTOR,
    },
    {
      address: "0xf8076E4Fb5cfE8be1C26E61222DC51828Db8C1dc",
      name: contractNames.lockup.HELPERS,
    },
    {
      address: "0x5522CA06Ce080800AB59BA4C091e63f6f54C5E6d",
      name: contractNames.lockup.VESTING_MATH,
    },
  ]),
  getDeployment("lockup", ChainId.BLAST, [
    {
      address: "0x193c2af965FEAca8D893c974712e5b6BD3cBc5ec",
      name: contractNames.lockup.SABLIER_BATCH_LOCKUP,
    },
    {
      address: "0xDbB6e9653d7e41766712Db22eB08ED3F21009fdd",
      name: contractNames.lockup.SABLIER_LOCKUP,
    },
    {
      address: "0x959c412d5919b1Ec5D07bee3443ea68c91d57dd7",
      name: contractNames.lockup.LOCKUP_NFT_DESCRIPTOR,
    },
    {
      address: "0xf8076E4Fb5cfE8be1C26E61222DC51828Db8C1dc",
      name: contractNames.lockup.HELPERS,
    },
    {
      address: "0x5522CA06Ce080800AB59BA4C091e63f6f54C5E6d",
      name: contractNames.lockup.VESTING_MATH,
    },
  ]),
  getDeployment("lockup", ChainId.BSC, [
    {
      address: "0xcf990fA3267F0945bBf7cf40A0c03F9dFE6a1804",
      name: contractNames.lockup.SABLIER_BATCH_LOCKUP,
    },
    {
      address: "0x6E0baD2c077d699841F1929b45bfb93FAfBEd395",
      name: contractNames.lockup.SABLIER_LOCKUP,
    },
    {
      address: "0x56831a5a932793E02251126831174Ab8Bf2f7695",
      name: contractNames.lockup.LOCKUP_NFT_DESCRIPTOR,
    },
    {
      address: "0xf8076E4Fb5cfE8be1C26E61222DC51828Db8C1dc",
      name: contractNames.lockup.HELPERS,
    },
    {
      address: "0x5522CA06Ce080800AB59BA4C091e63f6f54C5E6d",
      name: contractNames.lockup.VESTING_MATH,
    },
  ]),
  getDeployment("lockup", ChainId.CHILIZ, [
    {
      address: "0x179536f3289fb50076968b339C7EF0Dc0B38E3AF",
      name: contractNames.lockup.SABLIER_BATCH_LOCKUP,
    },
    {
      address: "0x711900e5f55d427cd88e5E3FCAe54Ccf02De71F4",
      name: contractNames.lockup.SABLIER_LOCKUP,
    },
    {
      address: "0x8A96f827082FB349B6e268baa0a7A5584c4Ccda6",
      name: contractNames.lockup.LOCKUP_NFT_DESCRIPTOR,
    },
    {
      address: "0xf8076E4Fb5cfE8be1C26E61222DC51828Db8C1dc",
      name: contractNames.lockup.HELPERS,
    },
    {
      address: "0x5522CA06Ce080800AB59BA4C091e63f6f54C5E6d",
      name: contractNames.lockup.VESTING_MATH,
    },
  ]),
  getDeployment("lockup", ChainId.CORE_DAO, [
    {
      address: "0x96dadeeab25413de04a1b8e40c4de41bd9d7fd29",
      name: contractNames.lockup.SABLIER_BATCH_LOCKUP,
    },
    {
      address: "0x4fff53bfe86a0bd59a81c89d8ba84c67cf947764",
      name: contractNames.lockup.SABLIER_LOCKUP,
    },
    {
      address: "0xac0cf0f2a96ed7ec3cfa4d0be621c67adc9dd903",
      name: contractNames.lockup.LOCKUP_NFT_DESCRIPTOR,
    },
    {
      address: "0xf8076E4Fb5cfE8be1C26E61222DC51828Db8C1dc",
      name: contractNames.lockup.HELPERS,
    },
    {
      address: "0x5522CA06Ce080800AB59BA4C091e63f6f54C5E6d",
      name: contractNames.lockup.VESTING_MATH,
    },
  ]),
  getDeployment("lockup", ChainId.FORM, [
    {
      address: "0x74759072f464F6600E7563DcC2828A2dE8111840",
      name: contractNames.lockup.SABLIER_BATCH_LOCKUP,
    },
    {
      address: "0xa2dD5E785AA0225D681416884D395c7E22D92850",
      name: contractNames.lockup.SABLIER_LOCKUP,
    },
    {
      address: "0x6Ef33eeCE9D3B04B1A954C0c94F09808C81512c8",
      name: contractNames.lockup.LOCKUP_NFT_DESCRIPTOR,
    },
    {
      address: "0xf8076E4Fb5cfE8be1C26E61222DC51828Db8C1dc",
      name: contractNames.lockup.HELPERS,
    },
    {
      address: "0x5522CA06Ce080800AB59BA4C091e63f6f54C5E6d",
      name: contractNames.lockup.VESTING_MATH,
    },
  ]),
  getDeployment("lockup", ChainId.GNOSIS, [
    {
      address: "0xe89EE0b2B31A296C5cCb631C3670F94bDD64a0D2",
      name: contractNames.lockup.SABLIER_BATCH_LOCKUP,
    },
    {
      address: "0x007aF5dC7b1CaA66Cf7Ebcc01E2e6ba4D55D3e92",
      name: contractNames.lockup.SABLIER_LOCKUP,
    },
    {
      address: "0x3140a6900AA2FF3186730741ad8255ee4e6d8Ff1",
      name: contractNames.lockup.LOCKUP_NFT_DESCRIPTOR,
    },
    {
      address: "0xf8076E4Fb5cfE8be1C26E61222DC51828Db8C1dc",
      name: contractNames.lockup.HELPERS,
    },
    {
      address: "0x5522CA06Ce080800AB59BA4C091e63f6f54C5E6d",
      name: contractNames.lockup.VESTING_MATH,
    },
  ]),
  getDeployment("lockup", ChainId.IOTEX, [
    {
      address: "0x5F448badebB50b9da6589C57B999725dc514B5D5",
      name: contractNames.lockup.SABLIER_BATCH_LOCKUP,
    },
    {
      address: "0xcaF51434a0af3c43Cd5569bC5eCc5aa21d28086E",
      name: contractNames.lockup.SABLIER_LOCKUP,
    },
    {
      address: "0xf9920809bf97Fc038bdB8c5c2C2D100036d7cc8c",
      name: contractNames.lockup.LOCKUP_NFT_DESCRIPTOR,
    },
    {
      address: "0xAe60adf8D373523076F68941A6C48dF4C18C68ef",
      name: contractNames.lockup.HELPERS,
    },
    {
      address: "0xe3247c554200C2dFf6Ba3c2Ea5b2F5a50dbf6B32",
      name: contractNames.lockup.VESTING_MATH,
    },
  ]),
  getDeployment("lockup", ChainId.LIGHTLINK, [
    {
      address: "0xe8fa70D0172BB36c952E3e20e2f3550Ca4557761",
      name: contractNames.lockup.SABLIER_BATCH_LOCKUP,
    },
    {
      address: "0x6c65aAf03186d1DA60127D3d7792cF36eD99D909",
      name: contractNames.lockup.SABLIER_LOCKUP,
    },
    {
      address: "0xCFB5F90370A7884DEc59C55533782B45FA24f4d1",
      name: contractNames.lockup.LOCKUP_NFT_DESCRIPTOR,
    },
    {
      address: "0xf8076E4Fb5cfE8be1C26E61222DC51828Db8C1dc",
      name: contractNames.lockup.HELPERS,
    },
    {
      address: "0x5522CA06Ce080800AB59BA4C091e63f6f54C5E6d",
      name: contractNames.lockup.VESTING_MATH,
    },
  ]),
  getDeployment("lockup", ChainId.LINEA, [
    {
      address: "0xEdf0A4b30defD14449604d1b97e2c39128c136CA",
      name: contractNames.lockup.SABLIER_BATCH_LOCKUP,
    },
    {
      address: "0x6964252561e8762dD10267176EaC5078b6291e51",
      name: contractNames.lockup.SABLIER_LOCKUP,
    },
    {
      address: "0x1514a869D29a8B22961e8F9eBa3DC64000b96BCe",
      name: contractNames.lockup.LOCKUP_NFT_DESCRIPTOR,
    },
    {
      address: "0x058aD99662FE7ecB8c3109920C99439a302b6573",
      name: contractNames.lockup.HELPERS,
    },
    {
      address: "0xdEe57959770667d97A90C94fE70C055496B7a791",
      name: contractNames.lockup.VESTING_MATH,
    },
  ]),
  getDeployment("lockup", ChainId.MODE, [
    {
      address: "0x34dBab20FD097F63DDbf3092D83B1005D2573082",
      name: contractNames.lockup.SABLIER_BATCH_LOCKUP,
    },
    {
      address: "0x3aEbaDFC423fD08BE4715986F68D5E9A597ec974",
      name: contractNames.lockup.SABLIER_LOCKUP,
    },
    {
      address: "0x64e7879558b6dfE2f510bd4b9Ad196ef0371EAA8",
      name: contractNames.lockup.LOCKUP_NFT_DESCRIPTOR,
    },
    {
      address: "0xf8076E4Fb5cfE8be1C26E61222DC51828Db8C1dc",
      name: contractNames.lockup.HELPERS,
    },
    {
      address: "0x5522CA06Ce080800AB59BA4C091e63f6f54C5E6d",
      name: contractNames.lockup.VESTING_MATH,
    },
  ]),
  getDeployment("lockup", ChainId.MORPH, [
    {
      address: "0x081BBbd4861BaBACE3E7eDC8a45741129DfC02fE",
      name: contractNames.lockup.SABLIER_BATCH_LOCKUP,
    },
    {
      address: "0xF3cd08105b6745965149eF02b8aBdCEa0Ae51241",
      name: contractNames.lockup.SABLIER_LOCKUP,
    },
    {
      address: "0x660314f09ac3B65E216B6De288aAdc2599AF14e2",
      name: contractNames.lockup.LOCKUP_NFT_DESCRIPTOR,
    },
    {
      address: "0xf8076E4Fb5cfE8be1C26E61222DC51828Db8C1dc",
      name: contractNames.lockup.HELPERS,
    },
    {
      address: "0x5522CA06Ce080800AB59BA4C091e63f6f54C5E6d",
      name: contractNames.lockup.VESTING_MATH,
    },
  ]),
  getDeployment("lockup", ChainId.OP_MAINNET, [
    {
      address: "0x0c4Cd6087DbFa3F74661BAbbFaa35273baC1c4b1",
      name: contractNames.lockup.SABLIER_BATCH_LOCKUP,
    },
    {
      address: "0x822e9c4852E978104d82F0f785bFA663c2b700c1",
      name: contractNames.lockup.SABLIER_LOCKUP,
    },
    {
      address: "0x41dBa1AfBB6DF91b3330dc009842327A9858Cbae",
      name: contractNames.lockup.LOCKUP_NFT_DESCRIPTOR,
    },
    {
      address: "0xf8076E4Fb5cfE8be1C26E61222DC51828Db8C1dc",
      name: contractNames.lockup.HELPERS,
    },
    {
      address: "0x5522CA06Ce080800AB59BA4C091e63f6f54C5E6d",
      name: contractNames.lockup.VESTING_MATH,
    },
  ]),
  getDeployment("lockup", ChainId.POLYGON, [
    {
      address: "0x1aDd9385F2C5c8e446bbB77c7A36839aB7743AF4",
      name: contractNames.lockup.SABLIER_BATCH_LOCKUP,
    },
    {
      address: "0xE0BFe071Da104e571298f8b6e0fcE44C512C1Ff4",
      name: contractNames.lockup.SABLIER_LOCKUP,
    },
    {
      address: "0xf5e12d0bA25FCa0D738Ec57f149736B2e4C46980",
      name: contractNames.lockup.LOCKUP_NFT_DESCRIPTOR,
    },
    {
      address: "0xf8076E4Fb5cfE8be1C26E61222DC51828Db8C1dc",
      name: contractNames.lockup.HELPERS,
    },
    {
      address: "0x5522CA06Ce080800AB59BA4C091e63f6f54C5E6d",
      name: contractNames.lockup.VESTING_MATH,
    },
  ]),
  getDeployment("lockup", ChainId.SCROLL, [
    {
      address: "0x8234Ad3CC4D29a4619C36a15286dac73078672a8",
      name: contractNames.lockup.SABLIER_BATCH_LOCKUP,
    },
    {
      address: "0xcB0B1f1D116eD62135848d8C90EB61afDA936Da8",
      name: contractNames.lockup.SABLIER_LOCKUP,
    },
    {
      address: "0x00Ff6443E902874924dd217c1435e3be04f57431",
      name: contractNames.lockup.LOCKUP_NFT_DESCRIPTOR,
    },
    {
      address: "0xf8076E4Fb5cfE8be1C26E61222DC51828Db8C1dc",
      name: contractNames.lockup.HELPERS,
    },
    {
      address: "0x5522CA06Ce080800AB59BA4C091e63f6f54C5E6d",
      name: contractNames.lockup.VESTING_MATH,
    },
  ]),
  getDeployment("lockup", ChainId.SEI, [
    {
      address: "0x34686937bef23c6441248Cc5A63A79a3a707e7E4",
      name: contractNames.lockup.SABLIER_BATCH_LOCKUP,
    },
    {
      address: "0x736A6E895790e089aEC2Bf76B2D7f368ce6Efff5",
      name: contractNames.lockup.SABLIER_LOCKUP,
    },
    {
      address: "0xeaFB40669fe3523b073904De76410b46e79a56D7",
      name: contractNames.lockup.LOCKUP_NFT_DESCRIPTOR,
    },
    {
      address: "0xf8076E4Fb5cfE8be1C26E61222DC51828Db8C1dc",
      name: contractNames.lockup.HELPERS,
    },
    {
      address: "0x5522CA06Ce080800AB59BA4C091e63f6f54C5E6d",
      name: contractNames.lockup.VESTING_MATH,
    },
  ]),
  getDeployment("lockup", ChainId.SUPERSEED, [
    {
      address: "0x89e9F2473836d9ab7D28Df6F180E30992b8CB5d6",
      name: contractNames.lockup.SABLIER_BATCH_LOCKUP,
    },
    {
      address: "0xF46D1f8C85f215A515F6D738ab3E3bA081f6C083",
      name: contractNames.lockup.SABLIER_LOCKUP,
    },
    {
      address: "0xa4576b58Ec760A8282D081dc94F3dc716DFc61e9",
      name: contractNames.lockup.LOCKUP_NFT_DESCRIPTOR,
    },
    {
      address: "0xf8076E4Fb5cfE8be1C26E61222DC51828Db8C1dc",
      name: contractNames.lockup.HELPERS,
    },
    {
      address: "0x5522CA06Ce080800AB59BA4C091e63f6f54C5E6d",
      name: contractNames.lockup.VESTING_MATH,
    },
  ]),
  getDeployment("lockup", ChainId.TAIKO, [
    {
      address: "0xcBbA08768C4a9D9131dE0467Ae136b8450dC13B2",
      name: contractNames.lockup.SABLIER_BATCH_LOCKUP,
    },
    {
      address: "0x628E88cDF558c0F4796c8CeB5068a023a7159aA7",
      name: contractNames.lockup.SABLIER_LOCKUP,
    },
    {
      address: "0x79F1fD8bB2D455f64010063Fc79E27561980FE10",
      name: contractNames.lockup.LOCKUP_NFT_DESCRIPTOR,
    },
    {
      address: "0xf8076E4Fb5cfE8be1C26E61222DC51828Db8C1dc",
      name: contractNames.lockup.HELPERS,
    },
    {
      address: "0x5522CA06Ce080800AB59BA4C091e63f6f54C5E6d",
      name: contractNames.lockup.VESTING_MATH,
    },
  ]),
  getDeployment("lockup", ChainId.TANGLE, [
    {
      address: "0xF5AC60870E1CCc4Bfce23cfbb7a796A0d8dBAf47",
      name: contractNames.lockup.SABLIER_BATCH_LOCKUP,
    },
    {
      address: "0x1cAe76b71913598d7664d16641CCB6037d8Ed61a",
      name: contractNames.lockup.SABLIER_LOCKUP,
    },
    {
      address: "0x92FC05e49c27884d554D98a5C01Ff0894a9DC29a",
      name: contractNames.lockup.LOCKUP_NFT_DESCRIPTOR,
    },
    {
      address: "0x3D664B2Da905DDD0Db931982FD9a759ea950D6e1",
      name: contractNames.lockup.HELPERS,
    },
    {
      address: "0x9EfC8663cAB0e2d97ad17C9fbfc8392445517E94",
      name: contractNames.lockup.VESTING_MATH,
    },
  ]),
  getDeployment("lockup", ChainId.ULTRA, [
    {
      address: "0x6Fe81F4Bf1aF1b829f0E701647808f3Aa4b0BdE7",
      name: contractNames.lockup.SABLIER_BATCH_LOCKUP,
    },
    {
      address: "0x4749dB4834be9b473D586Ad4d98133dAfC678313",
      name: contractNames.lockup.SABLIER_LOCKUP,
    },
    {
      address: "0x6D64Fc0BB0291C6A4F416eC1C379815C06967EaF",
      name: contractNames.lockup.LOCKUP_NFT_DESCRIPTOR,
    },
    {
      address: "0xd595D34ed96b253E7c7a934a7624F330a8411953",
      name: contractNames.lockup.HELPERS,
    },
    {
      address: "0xB8aB2E66d5E4931e675CBE499d8c01B778694fd3",
      name: contractNames.lockup.VESTING_MATH,
    },
  ]),
  getDeployment("lockup", ChainId.UNICHAIN, [
    {
      address: "0xaf875A2bDb74bA8872292FC371131eb45a9b570C",
      name: contractNames.lockup.SABLIER_BATCH_LOCKUP,
    },
    {
      address: "0x26C341C4D79bA8F6BFB450a49E9165c936316B14",
      name: contractNames.lockup.SABLIER_LOCKUP,
    },
    {
      address: "0xa5F12D63E18a28C9BE27B6f3d91ce693320067ba",
      name: contractNames.lockup.LOCKUP_NFT_DESCRIPTOR,
    },
    {
      address: "0xf8076e4fb5cfe8be1c26e61222dc51828db8c1dc",
      name: contractNames.lockup.HELPERS,
    },
    {
      address: "0x5522ca06ce080800ab59ba4c091e63f6f54c5e6d",
      name: contractNames.lockup.VESTING_MATH,
    },
  ]),
  getDeployment("lockup", ChainId.XDC, [
    {
      address: "0x6d36227Dd84e2A3d898B192Bc82a005c3cc2320C",
      name: contractNames.lockup.SABLIER_BATCH_LOCKUP,
    },
    {
      address: "0x489e0DC5E62A751A2b209f1cC03E189fd6257176",
      name: contractNames.lockup.SABLIER_LOCKUP,
    },
    {
      address: "0x4c1311a9d88BFb7023148aB04F7321C2E91c29bf",
      name: contractNames.lockup.LOCKUP_NFT_DESCRIPTOR,
    },
    {
      address: "0xf8076e4fb5cfe8be1c26e61222dc51828db8c1dc",
      name: contractNames.lockup.HELPERS,
    },
    {
      address: "0x5522ca06ce080800ab59ba4c091e63f6f54c5e6d",
      name: contractNames.lockup.VESTING_MATH,
    },
  ]),
  getDeployment("lockup", ChainId.ZK_SYNC_ERA, [
    {
      address: "0xCC926359DBE6b6311D63f8155fcC3B57F3fAAE80",
      name: contractNames.lockup.SABLIER_BATCH_LOCKUP,
    },
    {
      address: "0x7BCcB3595Aa81Dbe8A69DD8C46f5C2A3cf76594A",
      name: contractNames.lockup.SABLIER_LOCKUP,
    },
    {
      address: "0xCB2d53c58496C2aA114bce4ED5C7fe768ce86542",
      name: contractNames.lockup.LOCKUP_NFT_DESCRIPTOR,
    },
    {
      address: "0x37De3Fc44a07A40411AD0Cea4310990C9F88c1C1",
      name: contractNames.lockup.HELPERS,
    },
    {
      address: "0xEE4a32E026aC2FD6BF71d9D7eB00803576aD314d",
      name: contractNames.lockup.VESTING_MATH,
    },
  ]),
];

/* -------------------------------------------------------------------------- */
/*                                  Testnets                                  */
/* -------------------------------------------------------------------------- */

const testnets = [
  getDeployment("lockup", ChainId.ETHEREUM_SEPOLIA, [
    {
      address: "0xB655ecD83D27f7c683A9605783bd2866a4dCEB04",
      name: contractNames.lockup.SABLIER_BATCH_LOCKUP,
    },
    {
      address: "0xd116c275541cdBe7594A202bD6AE4DBca4578462",
      name: contractNames.lockup.SABLIER_LOCKUP,
    },
    {
      address: "0x08D3C81626d9Cb19760835e8730Ec0D3F1899976",
      name: contractNames.lockup.LOCKUP_NFT_DESCRIPTOR,
    },
    {
      address: "0xf8076E4Fb5cfE8be1C26E61222DC51828Db8C1dc",
      name: contractNames.lockup.HELPERS,
    },
    {
      address: "0x5522CA06Ce080800AB59BA4C091e63f6f54C5E6d",
      name: contractNames.lockup.VESTING_MATH,
    },
  ]),
  getDeployment("lockup", ChainId.ARBITRUM_SEPOLIA, [
    {
      address: "0xbf85cd17ca59b7a2b81d3d776ce1602a7c0af9d9",
      name: contractNames.lockup.SABLIER_BATCH_LOCKUP,
    },
    {
      address: "0x83Dd52FCA44E069020b58155b761A590F12B59d3",
      name: contractNames.lockup.SABLIER_LOCKUP,
    },
    {
      address: "0x8224eb5d7d76b2d7df43b868d875e79b11500ea8",
      name: contractNames.lockup.LOCKUP_NFT_DESCRIPTOR,
    },
    {
      address: "0xf8076E4Fb5cfE8be1C26E61222DC51828Db8C1dc",
      name: contractNames.lockup.HELPERS,
    },
    {
      address: "0x5522CA06Ce080800AB59BA4C091e63f6f54C5E6d",
      name: contractNames.lockup.VESTING_MATH,
    },
  ]),
  getDeployment("lockup", ChainId.BASE_SEPOLIA, [
    {
      address: "0xEdc716E9672f672456d22b02532395c1e62B8C16",
      name: contractNames.lockup.SABLIER_BATCH_LOCKUP,
    },
    {
      address: "0xa4777CA525d43a7aF55D45b11b430606d7416f8d",
      name: contractNames.lockup.SABLIER_LOCKUP,
    },
    {
      address: "0xCA2593027BA24856c292Fdcb5F987E0c25e755a4",
      name: contractNames.lockup.LOCKUP_NFT_DESCRIPTOR,
    },
    {
      address: "0xf8076E4Fb5cfE8be1C26E61222DC51828Db8C1dc",
      name: contractNames.lockup.HELPERS,
    },
    {
      address: "0x5522CA06Ce080800AB59BA4C091e63f6f54C5E6d",
      name: contractNames.lockup.VESTING_MATH,
    },
  ]),
  getDeployment("lockup", ChainId.BLAST_SEPOLIA, [
    {
      address: "0x30FC3D5b53e17edbC72d0a488f10C0eD3d7b0893",
      name: contractNames.lockup.SABLIER_BATCH_LOCKUP,
    },
    {
      address: "0x3fC9E80478c65759a8273CD9dFe2D7011b45164E",
      name: contractNames.lockup.SABLIER_LOCKUP,
    },
    {
      address: "0xF0182C7c0F155CdB49B575cFB5Fe7b3cE94D2234",
      name: contractNames.lockup.LOCKUP_NFT_DESCRIPTOR,
    },
    {
      address: "0xf8076E4Fb5cfE8be1C26E61222DC51828Db8C1dc",
      name: contractNames.lockup.HELPERS,
    },
    {
      address: "0x5522CA06Ce080800AB59BA4C091e63f6f54C5E6d",
      name: contractNames.lockup.VESTING_MATH,
    },
  ]),
  getDeployment("lockup", ChainId.LINEA_SEPOLIA, [
    {
      address: "0x9A987181BF05b7C154118A3216d522fa2407a8Be",
      name: contractNames.lockup.SABLIER_BATCH_LOCKUP,
    },
    {
      address: "0xbb4A14868A4BEc78b7354582b8C818ba520d7A4E",
      name: contractNames.lockup.SABLIER_LOCKUP,
    },
    {
      address: "0xCE94BE25320A51Ac868d0C133c251aE10682DabD",
      name: contractNames.lockup.LOCKUP_NFT_DESCRIPTOR,
    },
    {
      address: "0x058aD99662FE7ecB8c3109920C99439a302b6573",
      name: contractNames.lockup.HELPERS,
    },
    {
      address: "0xdEe57959770667d97A90C94fE70C055496B7a791",
      name: contractNames.lockup.VESTING_MATH,
    },
  ]),
  getDeployment("lockup", ChainId.MODE_TESTNET, [
    {
      address: "0xaD2f0228369D71605cd19c33FfA2Dde85A2FE477",
      name: contractNames.lockup.SABLIER_BATCH_LOCKUP,
    },
    {
      address: "0xF56b79523FD0b4A6c9bf4e6F7a3Ea45dC0fB5bBC",
      name: contractNames.lockup.SABLIER_LOCKUP,
    },
    {
      address: "0xDd695E927b97460C8d454D8f6d8Cd797Dcf1FCfD",
      name: contractNames.lockup.LOCKUP_NFT_DESCRIPTOR,
    },
    {
      address: "0xf8076E4Fb5cfE8be1C26E61222DC51828Db8C1dc",
      name: contractNames.lockup.HELPERS,
    },
    {
      address: "0x5522CA06Ce080800AB59BA4C091e63f6f54C5E6d",
      name: contractNames.lockup.VESTING_MATH,
    },
  ]),
  getDeployment("lockup", ChainId.MONAD_TESTNET, [
    {
      address: "0xC60B812b7aec661D6E519EE6d3d96b83155A31F4",
      name: contractNames.lockup.SABLIER_BATCH_LOCKUP,
    },
    {
      address: "0xb8fa18a1C1090648C3B896ddeC2d3B7e2Ae3daAc",
      name: contractNames.lockup.SABLIER_LOCKUP,
    },
    {
      address: "0x37308aAB2eF87427cA5e844A6d5E9B6EEBB0b154",
      name: contractNames.lockup.LOCKUP_NFT_DESCRIPTOR,
    },
    {
      address: "0xf8076E4Fb5cfE8be1C26E61222DC51828Db8C1dc",
      name: contractNames.lockup.HELPERS,
    },
    {
      address: "0x5522CA06Ce080800AB59BA4C091e63f6f54C5E6d",
      name: contractNames.lockup.VESTING_MATH,
    },
  ]),
  getDeployment("lockup", ChainId.OP_SEPOLIA, [
    {
      address: "0xF7BA8a7dc96d1939b789b91865bdb05596EBB558",
      name: contractNames.lockup.SABLIER_BATCH_LOCKUP,
    },
    {
      address: "0x1f898895eAB949FfD34c29Cf859C035DC4525DF4",
      name: contractNames.lockup.SABLIER_LOCKUP,
    },
    {
      address: "0xDf6163ddD3Ebcb552Cc1379a9c65AFe68683534e",
      name: contractNames.lockup.LOCKUP_NFT_DESCRIPTOR,
    },
    {
      address: "0xf8076E4Fb5cfE8be1C26E61222DC51828Db8C1dc",
      name: contractNames.lockup.HELPERS,
    },
    {
      address: "0x5522CA06Ce080800AB59BA4C091e63f6f54C5E6d",
      name: contractNames.lockup.VESTING_MATH,
    },
  ]),
  getDeployment("lockup", ChainId.SUPERSEED_SEPOLIA, [
    {
      address: "0xB2C6C57ee10B88E8344f34ffeCe39B0C6573c23D",
      name: contractNames.lockup.SABLIER_BATCH_LOCKUP,
    },
    {
      address: "0x4E83EC1Ea3B885C1a3698dA7DC42F32575688ABE",
      name: contractNames.lockup.SABLIER_LOCKUP,
    },
    {
      address: "0xc5D8E4317CE4a2E323192A5d856C90372bDE1558",
      name: contractNames.lockup.LOCKUP_NFT_DESCRIPTOR,
    },
    {
      address: "0xf8076E4Fb5cfE8be1C26E61222DC51828Db8C1dc",
      name: contractNames.lockup.HELPERS,
    },
    {
      address: "0x5522CA06Ce080800AB59BA4C091e63f6f54C5E6d",
      name: contractNames.lockup.VESTING_MATH,
    },
  ]),
  getDeployment("lockup", ChainId.TAIKO_HEKLA, [
    {
      address: "0x5F62Be3b60c3Dc3D49e96Ee8390Fea2930A3E01b",
      name: contractNames.lockup.SABLIER_BATCH_LOCKUP,
    },
    {
      address: "0xa969f0CCc080dfd513Eb7175248df68364701fC2",
      name: contractNames.lockup.SABLIER_LOCKUP,
    },
    {
      address: "0x4a92Ca0a777fd781B3aA1d7925Ad54B64C85eedE",
      name: contractNames.lockup.LOCKUP_NFT_DESCRIPTOR,
    },
    {
      address: "0xf8076E4Fb5cfE8be1C26E61222DC51828Db8C1dc",
      name: contractNames.lockup.HELPERS,
    },
    {
      address: "0x5522CA06Ce080800AB59BA4C091e63f6f54C5E6d",
      name: contractNames.lockup.VESTING_MATH,
    },
  ]),
  getDeployment("lockup", ChainId.ZK_SYNC_SEPOLIA, [
    {
      address: "0xd5f24C5E4800dF47D99E8168B9eE611b8Ba70490",
      name: contractNames.lockup.SABLIER_BATCH_LOCKUP,
    },
    {
      address: "0x474087A8c30b0615713e9F0249529D6ff79cA992",
      name: contractNames.lockup.SABLIER_LOCKUP,
    },
    {
      address: "0xE34228B88BA2DC2EaeD2d4CB4CbBa874f1F4483c",
      name: contractNames.lockup.LOCKUP_NFT_DESCRIPTOR,
    },
    {
      address: "0x9697a091cEe846E7dd9cCB15f8a1e03f8150cE89",
      name: contractNames.lockup.HELPERS,
    },
    {
      address: "0x020a61e468229499a2feBB2412E8f563B422C3dC",
      name: contractNames.lockup.VESTING_MATH,
    },
  ]),
];

export default [...mainnets, ...testnets];

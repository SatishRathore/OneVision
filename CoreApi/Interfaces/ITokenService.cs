using CoreApi.Entities;

namespace CoreApi.Interfaces
{
    public interface ITokenService
    {
        string CreateToken(AppUser user);
    }
}